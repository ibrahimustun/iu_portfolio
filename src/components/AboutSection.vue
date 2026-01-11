<template >
    <section class="text-white mt-18" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white text-left mb-8">{{ currentTexts.educationTitle }}</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in currentEducation" :key="element.id"
                    class="flex items-center md:w-[90%] w-full rounded-2xl bg-[#111a3e]/60 backdrop-blur-sm shadow-xl border border-white/5 hover:-translate-y-1 transition-transform duration-300 p-6"
                    >
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png" alt="graduation-cap--v1">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                                {{ element.School }}
                            </h3>
                            <p class="text-white">{{ element.program }}</p>
                            <p class="text-white">{{ element.location }}</p>
                            <p class="text-white">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white md:text-center text-left mb-4">
                    {{ currentTexts.moreTitle }}
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{{ currentTexts.about }}</span>
                    {{ currentTexts.me }}
                </h2>
                <p class="text-base lg:text-lg mt-8 py-8">
                    {{ currentTexts.aboutDesc }}
                </p>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useLang } from '@/composables/useLang'

const { lang } = useLang()

const education = {
    en: [
        {
            id:1,
            School:'Burdur Mehmet Akif Ersoy University',
            program:'Computer Engineering',
            location:'Burdur/Türkiye',
            year:'2015-2021'
        }
    ],
    tr: [
        {
            id:1,
            School:'Burdur Mehmet Akif Ersoy Üniversitesi',
            program:'Bilgisayar Mühendisliği',
            location:'Burdur/Türkiye',
            year:'2015-2021'
        }
    ],
    ru: [
        {
            id:1,
            School:'Университет Бурдура Мехмета Акифа Эрсоя',
            program:'Компьютерная инженерия',
            location:'Бурдур/Турция',
            year:'2015-2021'
        }
    ]
}

const texts = {
    en: {
        educationTitle: "My Education",
        moreTitle: "More",
        about: "About",
        me: " Me",
        aboutDesc: `I studied Computer Engineering at Mehmet Akif Ersoy University, where I discovered my passion for software and design. I am always eager to learn, continuously improve, and take on new creative challenges. In my free time, I enjoy exploring different cultures and working on personal projects.`
    },
    tr: {
        educationTitle: "Eğitimim",
        moreTitle: "Daha",
        about: "Fazla",
        me: " Hakkımda",
        aboutDesc: `Mehmet Akif Ersoy Üniversitesi'nde Bilgisayar Mühendisliği okudum. Bu süreçte, yazılım ve tasarıma olan tutkumu keşfettim. Kendimi sürekli olarak geliştirmeye, yeni şeyler öğrenmeye ve yaratıcı zorlukların üstesinden gelmeye hevesli biriyim. Boş zamanlarımda farklı kültürleri keşfetmekten ve kişisel projeler üzerinde çalışmaktan keyif alırım.`
    },
    ru: {
        educationTitle: "Мое образование",
        moreTitle: "Больше",
        about: "Обо",
        me: " мне",
        aboutDesc: `Я изучал компьютерную инженерию в Университете Мехмета Акифа Эрсоя, где открыл для себя страсть к программированию и дизайну. Я всегда стремлюсь учиться, совершенствоваться и принимать новые творческие вызовы. В свободное время я люблю знакомиться с разными культурами и работать над личными проектами.`
    }
}

const currentTexts = computed(() => texts[lang.value] || texts.en)
const currentEducation = computed(() => education[lang.value] || education.en)
</script>