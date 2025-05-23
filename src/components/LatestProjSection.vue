<template>
    <section class="text-white mt-20" id="projects">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white">My Latest Projects</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
                    <label v-for="category in categories" :key="category" class="hover:text-primary cursor-pointer">
                        <input 
                            type="radio" 
                            v-model="selectedCategory" 
                            :value="category" 
                            class="hidden"
                        >
                        <span :class="{ 'text-primary': selectedCategory === category }">{{ category }}</span>
                    </label>
                </div>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <div v-for="project in filteredProjects" :key="project.id">
                    <!-- Carousel Wrapper -->
                    <div class="w-full relative group" style="aspect-ratio: 50 / 25;">
                        <!-- Carousel Images -->
                        <div class="h-full w-full relative overflow-hidden">
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
                                    class="w-full h-full object-cover object-center"
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
                            class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 cursor-pointer"
                            @click="prevImage(project)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <!-- Right Arrow -->
                        <button
                            class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 cursor-pointer"
                            @click="nextImage(project)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                    <!-- Project Details -->
                    <div class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4">
                        <h3 class="text-lg font-semibold uppercase lg:text-xl">{{ project.title }}</h3>
                        <p class="text-[#ADB7BE]">{{ project.description }}</p>
                        <div class="flex flex-wrap p-2.5">
                            <div v-for="technology in project.technologies" :key="technology" class="text-center ml-1 mt-1 rounded-3xl bg-[#111827]"
                                style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                                <p class="px-1 py-2">{{ technology }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const categories = ['all', 'game development', 'front end development', 'web applications'];
const selectedCategory = ref('all');

const Projects = ref([
    {
        id: 1,
        category: 'game development',
        images: [
            new URL('@/assets/ibu.png', import.meta.url).href,
            new URL('@/assets/ibu_1.png', import.meta.url).href,
            new URL('@/assets/ibu_2.png', import.meta.url).href
        ],
        currentImageIndex: 0,
        title: 'Ibu',
        description: 'It is a 2D platformer game that I am currently developing and continuing to work on using C# and Unity. Featuring challenging levels, unique mechanics, and a vibrant art style, this project reflects my ongoing growth in game design and Unity development.',
        technologies: ['C#', 'Unity'],
        gitURL: 'https://github.com/ibrahimustun/Ibu',
        playStoreURL: '#',
    },
    {
        id: 2,
        category: 'web applications',
        images: [
            new URL('@/assets/skyup.png', import.meta.url).href,
            new URL('@/assets/skyup_1.png', import.meta.url).href,
            new URL('@/assets/skyup_2.png', import.meta.url).href
        ],
        currentImageIndex: 0,
        title: 'SkyUp',
        description: 'The warehouse tracking application for İtimat Elevator Factory streamlines inventory management and tracks stock movements in real time. Built with Java, MySQL, Vue.js, and Bootstrap, it offers a user-friendly interface and a robust, reliable backend.',
        technologies: ['Java', 'Vue.js', 'MySQL','Bootstrap'],
    },
    {
        id: 3,
        category: 'game development',
        images: [
            new URL('@/assets/frogfeeder.png', import.meta.url).href,
            new URL('@/assets/frogfeeder_1.png', import.meta.url).href,
            new URL('@/assets/frogfeeder_2.png', import.meta.url).href
        ],
        currentImageIndex: 0,
        title: 'Frog Feeder',
        description: 'It is a 2D game prototype developed in Unity with C#, where players help a frog catch flies. Featuring simple yet engaging mechanics and colorful visuals, this project showcases my skills in Unity, prototyping, and game design.',
        technologies: ['C#', 'Unity'],
        gitURL: 'https://github.com/ibrahimustun/FrogFeeder',
        playStoreURL: '#',
    },
    {
        id: 4,
        category: 'game development',
        images: [
            new URL('@/assets/2064.png', import.meta.url).href,
            new URL('@/assets/2064_1.png', import.meta.url).href,
            new URL('@/assets/2064_2.png', import.meta.url).href
        ],
        currentImageIndex: 0,
        title: '2048',
        description: 'A simple 2048 game was created for PC using Unity and C#. Players slide and combine numbers to reach the 2048 tile. The game features smooth controls and a clean design.',
        technologies: ['C#', 'Unity'],
        gitURL: 'https://github.com/ibrahimustun/2048-Game',
    },
    {
        id: 5,
        category: 'game development',
        images: [
            new URL('@/assets/misterkarpuz.png', import.meta.url).href,
            new URL('@/assets/misterkarpuz_1.png', import.meta.url).href,
            new URL('@/assets/misterkarpuz_2.png', import.meta.url).href
        ],
        currentImageIndex: 0,
        title: 'Mr.Karpuz',
        description: 'It is the first mobile platformer game I developed using Unity and C#. Players guide a watermelon character through challenging levels, featuring smooth controls and colorful visuals. It reflects my early experience in game design and Unity development.',
        technologies: ['C#', 'Unity'],
        gitURL: 'https://github.com/ibrahimustun/Mister-Karpuz',
        playStoreURL: '#',
    },
    {
        id: 6,
        category: 'front end development',
        images: [
            new URL('@/assets/e_ustun.png', import.meta.url).href
        ],
        currentImageIndex: 0,
        title: 'USTUN',
        description: 'This e-commerce website was built using HTML, CSS, and PHP. It allows users to explore handmade products, view details, and reach out for purchases.',
        technologies: ['HTML', 'Css', 'Php'],
        gitURL: 'https://github.com/ibrahimustun/USTUN---E-Commerce-Web-Site',
    },
]);

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return Projects.value;
    }
    return Projects.value.filter(project => 
        project.category.toLowerCase() === selectedCategory.value.toLowerCase()
    );
});

const nextImage = (project) => {
    project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
};

const prevImage = (project) => {
    project.currentImageIndex = (project.currentImageIndex - 1 + project.images.length) % project.images.length;
};
</script>