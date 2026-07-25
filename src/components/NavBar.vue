<template>
  <header class="fixed inset-x-0 top-2 z-50 px-3 sm:top-4">
    <div class="mx-auto flex max-w-[45rem] items-center justify-end md:justify-center">
      <button
        type="button"
        class="flex h-11 w-11 items-center justify-center rounded-full bg-white/88 text-slate-700 shadow-xl shadow-teal-200/30 ring-1 ring-white/70 backdrop-blur-2xl transition hover:bg-teal-50 hover:text-teal-800 md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        :aria-label="isMenuOpen ? currentControls.closeMenu : currentControls.openMenu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="relative h-4 w-5">
          <span
            class="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition"
            :class="isMenuOpen ? 'translate-y-[7px] rotate-45' : ''"
          ></span>
          <span
            class="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition"
            :class="isMenuOpen ? 'opacity-0' : ''"
          ></span>
          <span
            class="absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition"
            :class="isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''"
          ></span>
        </span>
      </button>

      <nav
        class="hidden w-full items-center justify-between gap-0 rounded-full bg-white/88 p-2 shadow-xl shadow-teal-200/30 ring-1 ring-white/70 backdrop-blur-2xl md:flex md:gap-3 md:px-8"
        aria-label="Primary navigation"
      >
        <a
          v-for="item in menuItems"
          :key="item.href"
          :href="item.href"
          class="shrink-0 rounded-full px-2.5 py-3 text-xs font-medium text-slate-600 transition hover:bg-teal-50 hover:text-teal-800 sm:px-4 sm:text-sm"
          :class="item.href === activeHref ? 'bg-teal-50 text-teal-900' : ''"
          @click="scrollToSection(item.href)"
        >
          {{ item.name }}
        </a>
      </nav>
    </div>

    <div class="fixed right-3 top-2 z-[60] hidden gap-1 rounded-full bg-white/88 p-1.5 shadow-xl shadow-teal-200/30 ring-1 ring-white/70 backdrop-blur-2xl sm:right-4 sm:top-4 md:flex">
      <button
        v-for="option in languageOptions"
        :key="option.code"
        type="button"
        class="rounded-full px-2.5 py-2 text-xs font-bold uppercase tracking-wide transition"
        :class="lang === option.code ? 'bg-teal-600 text-white' : 'text-slate-500 hover:bg-teal-50 hover:text-teal-800'"
        :aria-label="option.label"
        @click="setLang(option.code)"
      >
        {{ option.code }}
      </button>
      <span class="mx-1 my-2 w-px bg-teal-100"></span>
      <button
        type="button"
        class="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition"
        :class="theme === 'dark' ? 'bg-teal-500 text-slate-950' : 'text-slate-500 hover:bg-teal-50 hover:text-teal-800'"
        :aria-label="theme === 'dark' ? 'Switch to day mode' : 'Switch to night mode'"
        :title="theme === 'dark' ? 'Day mode' : 'Night mode'"
        @click="toggleTheme"
      >
        {{ theme === 'dark' ? '☀' : '☾' }}
      </button>
    </div>

    <div
      id="mobile-navigation"
      class="mx-auto mt-3 max-w-sm overflow-hidden rounded-2xl bg-white/94 shadow-2xl shadow-teal-200/40 ring-1 ring-white/70 backdrop-blur-2xl transition md:hidden"
      :class="isMenuOpen ? 'max-h-[34rem] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'"
    >
      <nav class="grid gap-1 p-2" aria-label="Mobile navigation">
        <a
          v-for="item in menuItems"
          :key="item.href"
          :href="item.href"
          class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-teal-50 hover:text-teal-800"
          :class="item.href === activeHref ? 'bg-teal-50 text-teal-900' : ''"
          @click="scrollToSection(item.href)"
        >
          {{ item.name }}
        </a>
      </nav>

      <div class="border-t border-teal-100/80 p-3">
        <p class="px-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{{ currentControls.language }}</p>
        <div class="mt-2 grid grid-cols-3 gap-2">
          <button
            v-for="option in languageOptions"
            :key="option.code"
            type="button"
            class="rounded-full px-3 py-2 text-xs font-bold uppercase tracking-wide transition"
            :class="lang === option.code ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-700 hover:bg-teal-100'"
            :aria-label="option.label"
            @click="setLang(option.code)"
          >
            {{ option.code }}
          </button>
        </div>

        <button
          type="button"
          class="mt-3 flex w-full items-center justify-between rounded-xl bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-100"
          @click="toggleTheme"
        >
          <span>{{ currentControls.theme }}</span>
          <span class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-base shadow-sm">
            {{ theme === 'dark' ? '☀' : '☾' }}
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useLang } from '@/composables/useLang'
import { useTheme } from '@/composables/useTheme'

const { lang, setLang } = useLang()
const { theme, toggleTheme } = useTheme()
const activeHref = ref('#home')
const isMenuOpen = ref(false)

const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'ru', label: 'Русский' },
]

const menuLabels = {
  en: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  tr: [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımda', href: '#about' },
    { name: 'Deneyim', href: '#experience' },
    { name: 'Teknolojiler', href: '#skills' },
    { name: 'Projeler', href: '#projects' },
    { name: 'İletişim', href: '#contact' },
  ],
  ru: [
    { name: 'Главная', href: '#home' },
    { name: 'Обо мне', href: '#about' },
    { name: 'Опыт', href: '#experience' },
    { name: 'Стек', href: '#skills' },
    { name: 'Проекты', href: '#projects' },
    { name: 'Контакты', href: '#contact' },
  ],
}

const controlLabels = {
  en: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    theme: 'Theme',
  },
  tr: {
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    language: 'Dil',
    theme: 'Tema',
  },
  ru: {
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    language: 'Язык',
    theme: 'Тема',
  },
}

const menuItems = computed(() => menuLabels[lang.value] || menuLabels.en)
const currentControls = computed(() => controlLabels[lang.value] || controlLabels.en)
const sectionHrefs = ['#home', '#about', '#experience', '#skills', '#projects', '#contact']

function scrollToSection(href) {
  const section = document.querySelector(href)
  if (section) {
    activeHref.value = href
    isMenuOpen.value = false
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function updateActiveSection() {
  const pageBottom = window.scrollY + window.innerHeight
  const documentHeight = document.documentElement.scrollHeight

  if (pageBottom >= documentHeight - 12) {
    activeHref.value = '#contact'
    return
  }

  const checkpoint = window.innerHeight * 0.34
  let currentHref = '#home'

  for (const href of sectionHrefs) {
    const section = document.querySelector(href)
    if (!section) continue

    const rect = section.getBoundingClientRect()
    if (rect.top <= checkpoint && rect.bottom > checkpoint) {
      currentHref = href
      continue
    }

    if (rect.top <= checkpoint) {
      currentHref = href
    }
  }

  activeHref.value = currentHref
}

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  window.addEventListener('resize', updateActiveSection)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('resize', updateActiveSection)
})
</script>
