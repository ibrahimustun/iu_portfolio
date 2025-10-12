<template>
<section class="text-white mt-18" id="skills">
    <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
        <span class="flex opacity-20">
            <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
            <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
        </span>
    </div>
    <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
        <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%]">
            <h2 class="text-4xl font-bold text-white text-left mb-4">
                {{ skillsTitle }}
            </h2>
            <div class="mt-8" v-for="skill in Skills" :key="skill.id">
                <div class="flex items-end justify-between" data-aos="fade-right">
                    <h4 class="font-semibold uppercase text-white">
                        {{ skill.name }}
                    </h4>
                    <h3 class="text-2xl font-bold text-white">{{ skill.width }}</h3>
                </div>
                <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
                    <div class="h-1 rounded-full bg-primary" :style="`width :${skill.width}`"></div>
                </div>
            </div>
        </div>
        <div data-aos="flip-left">
            <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8">
                {{ experiencesTitle }}
            </h2>
            <div class="space-y-8 py-8" data-aos="fade-left">
                <div v-for="element in Experiences" :key="element.id" class="flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]">
                    <div class="w-1/4">
                        <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer">
                    </div>
                    <div class="w-3/4 pl-4">
                        <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            {{ element.role }}
                        </h3>
                        <p class="text-white">{{ element.company }}</p>
                        <p class="text-white">{{ element.date }}</p>
                        <p class="text-white mt-2" v-if="element.description">{{ element.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script setup>
import { computed } from 'vue'
import { useLang } from '@/composables/useLang'

const { lang } = useLang()

const texts = {
    en: {
        skillsTitle: 'My Skills',
        experiencesTitle: 'My Experiences'
    },
    tr: {
        skillsTitle: 'Yeteneklerim',
        experiencesTitle: 'Deneyimlerim'
    },
    ru: {
        skillsTitle: 'Мои навыки',
        experiencesTitle: 'Мой опыт'
    }
};

const skills = {
    en: [
        { id: 1, name: 'HTML & CSS', width: '85%' },
        { id: 2, name: 'C#', width: '75%' },
        { id: 3, name: 'JavaScript', width: '80%' },
        { id: 4, name: 'Vue.js', width: '85%' },
        { id: 5, name: 'Unity', width: '90%' },
        { id: 6, name: 'Java', width: '60%' },
        { id: 7, name: 'SQL', width: '80%' }
    ],
    tr: [
        { id: 1, name: 'HTML & CSS', width: '85%' },
        { id: 2, name: 'C#', width: '75%' },
        { id: 3, name: 'JavaScript', width: '80%' },
        { id: 4, name: 'Vue.js', width: '85%' },
        { id: 5, name: 'Unity', width: '90%' },
        { id: 6, name: 'Java', width: '60%' },
        { id: 7, name: 'SQL', width: '80%' }
    ],
    ru: [
        { id: 1, name: 'HTML и CSS', width: '85%' },
        { id: 2, name: 'C#', width: '75%' },
        { id: 3, name: 'JavaScript', width: '80%' },
        { id: 4, name: 'Vue.js', width: '85%' },
        { id: 5, name: 'Unity', width: '90%' },
        { id: 6, name: 'Java', width: '60%' },
        { id: 7, name: 'SQL', width: '80%' }
    ]
};

const experiences = {
    en: [
        { id: 0, role: 'Full-Stack Developer', company: 'NeonRun', date: 'June 2025 - Present', description: 'I am actively involved in software platforms that digitalize production operations and automate quality processes.'},
        { id: 1, role: 'Web Designer', company: 'Seta Medya', date: 'December 2024 - January 2025'},
        { id: 2, role: 'Software Developer', company: 'İtimat Asansör', date: 'September 2024 - December 2024', description: 'I successfully developed and implemented a warehouse management application that digitalized the stock and inventory processes for İtimat Asansör factory.' }
    ],
    tr: [
        { id: 0, role: 'Full-Stack Developer', company: 'NeonRun', date: 'Haziran 2025 - Devam Ediyor', description: 'Üretim operasyonlarını dijitalleştiren ve kalite süreçlerini otomatikleştiren yazılım platformlarında aktif olarak görev alıyorum.' },
        { id: 1, role: 'Web Tasarımcısı', company: 'Seta Medya', date: 'Aralık 2024 - Ocak 2025'},
        { id: 2, role: 'Yazılım Geliştirici', company: 'İtimat Asansör', date: 'Eylül 2024 - Aralık 2024', description: 'İtimat Asansör fabrikası için stok ve envanter süreçlerini dijitalleştiren, depo takip uygulamasını başarıyla geliştirdim ve uygulamaya aldım.' }
    ],
    ru: [
        { id: 0, role: 'Full-Stack разработчик', company: 'NeonRun', date: 'Июнь 2025 - по настоящее время', description: 'Я активно участвую в программных платформах, которые цифровизируют производственные операции и автоматизируют процессы контроля качества.' },
        { id: 1, role: 'Веб-дизайнер', company: 'Seta Medya', date: 'Декабрь 2024 - Январь 2025'},
        { id: 2, role: 'Разработчик ПО', company: 'İtimat Asansör', date: 'Сентябрь 2024 - Декабрь 2024', description: 'Я успешно разработал и внедрил приложение для управления складом, которое цифровизировало процессы учёта запасов и инвентаризации на заводе İtimat Asansör.' }
    ]
};

const skillsTitle = computed(() => (texts[lang.value] || texts.en).skillsTitle);
const experiencesTitle = computed(() => (texts[lang.value] || texts.en).experiencesTitle);

const Skills = computed(() => skills[lang.value] || skills.en);
const Experiences = computed(() => experiences[lang.value] || experiences.en);
</script>