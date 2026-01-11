<template>
    <section class="text-white mt-20 relative z-30" id="projects">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white">{{ currentTexts.latestProjects }}</h2>
                <div class="flex flex-wrap gap-2 mb-4 mt-5 md:mt-0">
                    <button v-for="category in categories" :key="category.value" 
                        @click="selectedCategory = category.value"
                        class="px-4 py-2 rounded-full border transition-all duration-300"
                        :class="selectedCategory === category.value ? 'bg-primary border-primary text-white' : 'border-white/10 hover:bg-white/10 text-gray-400'"
                    >
                        {{ category.label }}
                    </button>
                </div>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <div v-for="(project, index) in filteredProjects" :key="project.id"
                     :class="{ 'lg:col-start-2': index === filteredProjects.length - 1 && filteredProjects.length % 3 === 1 }"
                     class="flex flex-col h-full"
                >
                    <!-- Carousel Wrapper -->
                    <div class="w-full relative group" style="aspect-ratio: 50 / 25;">
                        <!-- Carousel Images -->
                        <div class="h-full w-full relative overflow-hidden rounded-t-2xl">
                            <div
                                v-for="(image, index) in project.images"
                                :key="index"
                                :style="{ 
                                    transform: `translateX(${(index - project.currentImageIndex) * 100}%)`
                                }"
                                class="absolute top-0 left-0 h-full w-full transition-transform duration-500">
                                <img 
                                    :src="image" 
                                    alt="Project screenshot" 
                                    class="w-full h-full object-cover object-center rounded-t-2xl"
                                >
                                <!-- GitHub and Play Store Icon Overlay -->
                                <a v-if="index === project.currentImageIndex && project.gitURL"
                                    :href="project.gitURL"
                                    target="_blank"
                                    class="absolute top-2 right-12 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.683-.217.683-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.91.832.092-.647.349-1.088.635-1.338-2.221-.252-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.03-2.686-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.801a9.564 9.564 0 0 1 2.5.337c1.91-1.294 2.75-1.025 2.75-1.025.546 1.376.202 2.393.1 2.646.64.699 1.03 1.593 1.03 2.686 0 3.847-2.337 4.696-4.566 4.944.358.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.75 0 .267.18.578.688.48C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                    </svg>
                                </a>
                                <!-- Google Play Store Icon -->
                                <a v-if="index === project.currentImageIndex && project.category === 'game development' && project.playStoreURL"
                                    :href="project.playStoreURL"
                                    target="_blank"
                                    class="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.5 2.75L20.5 12 3.5 21.25V2.75zm3.25 2.78v12.94l8.25-6.47-8.25-6.47z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <!-- Left Arrow -->
                        <button
                            class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 cursor-pointer z-10"
                            @click="prevImage(project)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <!-- Right Arrow -->
                        <button
                            class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 cursor-pointer z-10"
                            @click="nextImage(project)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                    <!-- Project Details -->
                    <div class="text-white rounded-b-2xl mt-0 bg-[#111a3e]/80 backdrop-blur-md shadow-xl border-x border-b border-white/5 py-6 px-4 flex-1 flex flex-col justify-between h-[250px] relative transition-height overflow-hidden">
                        <div>
                            <h3 class="text-lg font-semibold uppercase lg:text-xl truncate" :title="getProjectTitle(project)">{{ getProjectTitle(project) }}</h3>
                            <p class="text-[#ADB7BE] mt-2 mb-4 line-clamp-4 text-sm">{{ getProjectDescription(project) }}</p>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-auto">
                            <span v-for="technology in project.technologies" :key="technology" 
                                class="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                                {{ technology }}
                            </span>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLang } from '@/composables/useLang'

const { lang } = useLang();

const texts = {
    en: {
        latestProjects: "My Projects",
        categories: [
            { value: 'all', label: 'All' },
            { value: 'game development', label: 'Game Development' },
            { value: 'front end development', label: 'Front End Development' },
            { value: 'web applications', label: 'Web Applications' },
        ],
        projects: [
            {
                id: 1,
                title: 'Uplify',
                description: 'This personal development tracking website was built using Vue, TypeScript, CSS and Bootstrap. It enables users to set goals, track their progress over time, and stay motivated with visual insights. Upfily provides a clean, interactive interface for managing self-improvement habits and encourages consistency through progress monitoring tools.',
            },
            {
                id: 2,
                title: 'Ibu',
                description: 'It is a fun 2D platformer game designed to help elementary school children improve their basic math operation skills. Developed using C# and Unity, this project combines learning and entertainment through engaging gameplay and colorful visuals.',
            },
            {
                id: 3,
                title: 'SkyUp',
                description: 'The warehouse tracking application for İtimat Elevator Factory streamlines inventory management and tracks stock movements in real time. Built with Java, MySQL, Vue.js and Bootstrap, it offers a user-friendly interface and a robust, reliable backend.',
            },
            {
                id: 4,
                title: 'Frog Feeder',
                description: 'It is a 2D game prototype developed in Unity with C#, where players help a frog catch flies. Featuring simple yet engaging mechanics and colorful visuals, this project showcases my skills in Unity, prototyping, and game design.',
            },
            {
                id: 5,
                title: '2048',
                description: 'A simple 2048 game was created for PC using Unity and C#. Players slide and combine numbers to reach the 2048 tile. The game features smooth controls and a clean design.',
            },
            {
                id: 6,
                title: 'Mr.Karpuz',
                description: 'It is the first mobile platformer game I developed using Unity and C#. Players guide a watermelon character through challenging levels, featuring smooth controls and colorful visuals. It reflects my early experience in game design and Unity development.',
            },
            {
                id: 7,
                title: 'USTUN',
                description: 'This e-commerce website was built using HTML, CSS and PHP. It allows users to explore handmade products, view details, and reach out for purchases.',
            },
        ]
    },
    tr: {
        latestProjects: "Projelerim",
        categories: [
            { value: 'all', label: 'Hepsi' },
            { value: 'game development', label: 'Oyun Geliştirme' },
            { value: 'front end development', label: 'Ön Yüz Geliştirme' },
            { value: 'web applications', label: 'Web Uygulamaları' },
        ],
        projects: [
            {
                id: 1,
                title: 'Uplify',
                description: 'Kişisel gelişim takibi için oluşturulmuş bu web sitesi, Vue, TypeScript, CSS ve Bootstrap kullanılarak geliştirildi. Kullanıcıların hedef belirlemesini, ilerlemelerini takip etmesini ve görsel analizlerle motive kalmasını sağlar. Uplify, kişisel alışkanlıkları yönetmek için temiz ve etkileşimli bir arayüz sunar ve istikrarı teşvik eder.',
            },
            {
                id: 2,
                title: 'Ibu',
                description: 'İlkokul çağındaki çocukların temel matematik işlemlerini geliştirmelerine yardımcı olmak için tasarlanmış eğlenceli bir 2D platform oyunu. C# ve Unity kullanılarak geliştirilen bu proje, ilgi çekici oynanışı ve renkli görselleriyle öğrenmeyi eğlenceyle birleştiriyor.',
            },
            {
                id: 3,
                title: 'SkyUp',
                description: "İtimat Asansör Fabrikası için geliştirilen depo takip uygulaması, envanter yönetimini kolaylaştırır ve stok hareketlerini anlık olarak izler. Java, MySQL, Vue.js ve Bootstrap ile geliştirilen bu uygulama kullanıcı dostu bir arayüz ve sağlam bir alt yapı sunar.",
            },
            {
                id: 4,
                title: 'Frog Feeder',
                description: "Unity ve C# ile geliştirilen bu 2D oyun prototipinde oyuncular bir kurbağaya sinek yakalamasında yardımcı olur. Basit ama eğlenceli dinamikleri ve renkli görselleriyle Unity, prototipleme ve oyun tasarımı konusundaki yeteneklerimi sergilemektedir.",
            },
            {
                id: 5,
                title: '2048',
                description: "Unity ve C# kullanılarak PC için geliştirilen basit bir 2048 oyunudur. Oyuncular sayıları kaydırarak ve birleştirerek 2048 kutucuğuna ulaşmaya çalışır. Oyun, akıcı kontroller ve sade bir tasarım sunar.",
            },
            {
                id: 6,
                title: 'Mr.Karpuz',
                description: "Unity ve C# ile geliştirdiğim ilk mobil platform oyunudur. Oyuncular karpuz karakterini zorlu seviyelerde yönlendirir, akıcı kontroller ve canlı görseller sunar. Oyun tasarımı ve Unity geliştirme konusunda ilk deneyimlerimi yansıtmaktadır.",
            },
            {
                id: 7,
                title: 'USTUN',
                description: "HTML, CSS ve PHP kullanılarak geliştirilen bu e-ticaret sitesi, kullanıcıların el yapımı ürünleri keşfetmesini, detaylarını incelemesini ve satın almak için iletişime geçmesini sağlar.",
            },
        ]
    },
    ru: {
        latestProjects: "Мои проекты",
        categories: [
            { value: 'all', label: 'Все' },
            { value: 'game development', label: 'Разработка игр' },
            { value: 'front end development', label: 'Frontend разработка' },
            { value: 'web applications', label: 'Веб-приложения' },
        ],
        projects: [
            {
                id: 1,
                title: 'Uplify',
                description: 'Этот сайт отслеживания личного развития создан с помощью Vue, TypeScript, CSS и Bootstrap. Он позволяет пользователям ставить цели, отслеживать свой прогресс и поддерживать мотивацию с помощью визуализаций. Uplify обеспечивает чистый и интерактивный интерфейс для управления привычками и поощряет последовательность.',
            },
            {
                id: 2,
                title: 'Ibu',
                description: 'Это увлекательная 2D платформенная игра, созданная для того, чтобы помочь детям начальной школы улучшить навыки базовых математических операций. Разработанный с использованием C# и Unity, этот проект сочетает обучение и развлечение через увлекательный игровой процесс и яркую графику.',
            },
            {
                id: 3,
                title: 'SkyUp',
                description: "Приложение для отслеживания склада для фабрики лифтов İtimat упрощает управление запасами и отслеживает перемещения в реальном времени. Создано на Java, MySQL, Vue.js и Bootstrap, имеет удобный интерфейс и надежный бэкенд.",
            },
            {
                id: 4,
                title: 'Frog Feeder',
                description: "Это прототип 2D-игры на Unity и C#, где игрок помогает лягушке ловить мух. Простая, но увлекательная механика и яркая графика демонстрируют мои навыки в Unity и геймдизайне.",
            },
            {
                id: 5,
                title: '2048',
                description: "Простая игра 2048 для ПК, созданная на Unity и C#. Игроки соединяют числа, чтобы достичь плитки 2048. Игра отличается плавным управлением и чистым дизайном.",
            },
            {
                id: 6,
                title: 'Mr.Karpuz',
                description: "Моя первая мобильная платформенная игра на Unity и C#. Игроки управляют арбузом в сложных уровнях с плавным управлением и яркой графикой. Этот проект отражает мой первый опыт в геймдизайне и Unity.",
            },
            {
                id: 7,
                title: 'USTUN',
                description: "Этот сайт электронной коммерции создан с помощью HTML, CSS и PHP. Позволяет пользователям просматривать изделия ручной работы, узнавать подробности и связываться для покупки.",
            },
        ]
    }
};

const currentTexts = computed(() => texts[lang.value] || texts.en);

// Kategoriler dinamiği her dilde label ile gelir!
const categories = computed(() => (currentTexts.value.categories));

const selectedCategory = ref('all');

const Projects = ref([
    {
        id: 1,
        category: 'front end development',
        images: [
            new URL('@/assets/upfily.png', import.meta.url).href,
            new URL('@/assets/upfily_1.png', import.meta.url).href,
            new URL('@/assets/upfily_2.png', import.meta.url).href,
            new URL('@/assets/upfily_3.png', import.meta.url).href
        ],
        currentImageIndex: 0,
        gitURL: 'https://github.com/ibrahimustun/Upfily',
        technologies: ['Vue.js', 'Typescript', 'Bootstrap'],
    },
    {
        id: 2,
        category: 'game development',
        images: [
            new URL('@/assets/ibu.png', import.meta.url).href,
            new URL('@/assets/ibu_1.png', import.meta.url).href,
            new URL('@/assets/ibu_2.png', import.meta.url).href
        ],
        currentImageIndex: 0,
        gitURL: 'https://github.com/ibrahimustun/Ibu',
        playStoreURL: '#',
        technologies: ['C#', 'Unity'],
    },
    {
        id: 3,
        category: 'web applications',
        images: [
             new URL('@/assets/skyup_3.png', import.meta.url).href,
            new URL('@/assets/skyup.png', import.meta.url).href,
            new URL('@/assets/skyup_1.png', import.meta.url).href,
            new URL('@/assets/skyup_2.png', import.meta.url).href
        ],
        currentImageIndex: 0,
        technologies: ['Java', 'Vue.js', 'MySQL','Bootstrap'],
    },
    {
        id: 4,
        category: 'game development',
        images: [
            new URL('@/assets/frogfeeder_3.png', import.meta.url).href,
            new URL('@/assets/frogfeeder.png', import.meta.url).href,
            new URL('@/assets/frogfeeder_1.png', import.meta.url).href,
            new URL('@/assets/frogfeeder_2.png', import.meta.url).href
        ],
        currentImageIndex: 0,
        gitURL: 'https://github.com/ibrahimustun/FrogFeeder',
        playStoreURL: '#',
        technologies: ['C#', 'Unity'],
    },
    {
        id: 5,
        category: 'game development',
        images: [
            new URL('@/assets/2048.png', import.meta.url).href,
            new URL('@/assets/2048_1.png', import.meta.url).href,
            new URL('@/assets/2048_2.png', import.meta.url).href,
            new URL('@/assets/2048_3.png', import.meta.url).href
        ],
        currentImageIndex: 0,
        gitURL: 'https://github.com/ibrahimustun/2048-Game',
        technologies: ['C#', 'Unity'],
    },
    {
        id: 6,
        category: 'game development',
        images: [
            new URL('@/assets/misterkarpuz.png', import.meta.url).href,
            new URL('@/assets/misterkarpuz_1.png', import.meta.url).href,
            new URL('@/assets/misterkarpuz_2.png', import.meta.url).href
        ],
        currentImageIndex: 0,
        gitURL: 'https://github.com/ibrahimustun/Mister-Karpuz',
        playStoreURL: '#',
        technologies: ['C#', 'Unity'],
    },
    {
        id: 7,
        category: 'front end development',
        images: [
            new URL('@/assets/e_ustun.png', import.meta.url).href
        ],
        currentImageIndex: 0,
        gitURL: 'https://github.com/ibrahimustun/USTUN---E-Commerce-Web-Site',
        technologies: ['HTML', 'Css', 'Php'],
    },
]);

// Kategoriye göre filtreleme
const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return Projects.value;
    }
    return Projects.value.filter(project => 
        project.category.toLowerCase() === selectedCategory.value.toLowerCase()
    );
});

// Proje başlığı ve açıklamasını aktif dile göre bul
function getProjectTitle(project) {
    const projectData = currentTexts.value.projects.find(p => p.id === project.id);
    return projectData ? projectData.title : '';
}
function getProjectDescription(project) {
    const projectData = currentTexts.value.projects.find(p => p.id === project.id);
    return projectData ? projectData.description : '';
}

const nextImage = (project) => {
    project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
};
const prevImage = (project) => {
    project.currentImageIndex = (project.currentImageIndex - 1 + project.images.length) % project.images.length;
};
</script>