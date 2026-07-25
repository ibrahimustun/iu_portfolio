<template>
  <header class="fixed inset-x-0 top-2 z-50 px-3 sm:top-4">
    <div class="mx-auto flex max-w-[45rem] items-center justify-center">
      <nav
        class="flex w-full items-center justify-between gap-0 overflow-x-auto rounded-full bg-white/88 p-2 shadow-xl shadow-teal-200/30 ring-1 ring-white/70 backdrop-blur-2xl sm:gap-3 sm:overflow-visible sm:px-8"
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

    <div class="fixed right-3 top-2 z-[60] flex gap-1 rounded-full bg-white/88 p-1.5 shadow-xl shadow-teal-200/30 ring-1 ring-white/70 backdrop-blur-2xl sm:right-4 sm:top-4">
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
  </header>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useLang } from '@/composables/useLang'
import { useTheme } from '@/composables/useTheme'

const { lang, setLang } = useLang()
const { theme, toggleTheme } = useTheme()
const activeHref = ref('#home')

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

const menuItems = computed(() => menuLabels[lang.value] || menuLabels.en)
const sectionHrefs = ['#home', '#about', '#experience', '#skills', '#projects', '#contact']

function scrollToSection(href) {
  const section = document.querySelector(href)
  if (section) {
    activeHref.value = href
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
