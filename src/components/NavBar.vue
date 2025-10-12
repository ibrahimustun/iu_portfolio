<template>
    <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
        <!-- Logo -->
        <div class="text-white text-3xl font-bold">
            <img src="@/assets/iu.png" alt="Logo" class="h-16 w-auto" />
        </div>
        <!-- Nav and Flag Container -->
        <div class="flex items-center ml-auto space-x-6">
            <!-- Desktop Nav -->
            <nav class="hidden md:block">
                <ul class="flex flex-row items-center space-x-8">
                    <li v-for="item in Menu" :key="item.name">
                        <a :href="item.href" 
                           class="block text-white transition hover:text-primary ease-linear text-2xl md:text-lg"
                           @click="scrollToSection(item.href)"
                        >
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- Language Selector -->
            <div class="relative" id="lang-dropdown">
            <button
                            class="flex items-center px-2 py-1 rounded bg-[#111827] text-white focus:outline-none"
                            @click.stop="showDropdown = !showDropdown"
            type="button"
            >
            <img
                            :src="flagIcons[selectedLanguage]"
                            :alt="selectedLanguage"
                class="w-7 h-7 mr-2 rounded-full object-cover object-center"
            />
            </button>
    <!-- DÜZELTİLEN KISIM -->
        <div 
        v-if="showDropdown"
        class="absolute z-40 left-1/2 -translate-x-1/2 mt-2 w-20 bg-[#111827] rounded-xl shadow-lg flex flex-col items-center"
        style="min-width: 48px;"
        >
        <ul>
            <li
                v-for="option in languageOptions"
                :key="option.code"
                class="flex items-center justify-center px-1 py-2 cursor-pointer hover:bg-[#232a3d] rounded-xl"
                @click="selectedLanguage = option.code; showDropdown = false; changeLanguage()"
            >
                <img :src="option.icon" :alt="option.label" class="w-7 h-7 rounded-full object-cover object-center" />
            </li>
        </ul>
        </div>
        </div>
            <!-- Mobile Menu Button -->
            <div class="md:hidden z-30 ml-2">
                <button type="button" 
                    class="block focus:outline-none"
                    @click="isMenuOpen = !isMenuOpen"
                >
                    <span v-if="isMenuOpen" class="text-5xl">
                        <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50" height="50">
                    </span>
                    <span v-else class="text-5xl">
                        <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="50" height="50">
                    </span>
                </button>
            </div>
        </div>
        <!-- Mobile Nav -->
        <nav
            :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:hidden md:justify-between md:flex-row',
                isMenuOpen ? 'block':'hidden'
            ]"
        >
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="item in Menu" :key="item.name">
                    <a :href="item.href" 
                        class="block text-white transition hover:text-primary ease-linear text-2xl md:text-lg"
                        @click="scrollToSection(item.href)"
                    >
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useLang } from '@/composables/useLang'

const { lang, setLang } = useLang();

const MenuLabels = {
    en: [
        {name:'About Me',href:'#about'},
        {name:'Skills',href:'#skills'},
        {name:'Projects',href:'#projects'},
        {name:'Contact',href:'#contact'},
    ],
    tr: [
        {name:'Hakkımda',href:'#about'},
        {name:'Yetenekler',href:'#skills'},
        {name:'Projeler',href:'#projects'},
        {name:'İletişim',href:'#contact'},
    ],
    ru: [
        {name:'Обо мне',href:'#about'},
        {name:'Навыки',href:'#skills'},
        {name:'Проекты',href:'#projects'},
        {name:'Контакты',href:'#contact'},
    ],
};

const selectedLanguage = ref(lang.value);
const Menu = ref(MenuLabels[selectedLanguage.value]);
const isMenuOpen = ref(false);

const changeLanguage = () => {
    setLang(selectedLanguage.value); 
    Menu.value = MenuLabels[selectedLanguage.value];
};

watch(selectedLanguage, () => {
    Menu.value = MenuLabels[selectedLanguage.value];
    setLang(selectedLanguage.value);
});

const scrollToSection = (href) => {
    isMenuOpen.value=false;
    const section=document.querySelector(href);
    if(section){
        section.scrollIntoView({behavior :'smooth'});
    }
}

// Bayrak ikonlarını eşle
const flagIcons = {
    en: "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/gb.svg",
    tr: "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/tr.svg",
    ru: "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/ru.svg"
};
const languageOptions = [
    { code: "en", label: "English", icon: flagIcons.en },
    { code: "tr", label: "Türkçe", icon: flagIcons.tr },
    { code: "ru", label: "Русский", icon: flagIcons.ru }
];

const showDropdown = ref(false);

function handleClickOutside(event) {
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown && !dropdown.contains(event.target)) {
        showDropdown.value = false;
    }
}
if (typeof window !== "undefined") {
    window.addEventListener('click', handleClickOutside);
}
</script>

