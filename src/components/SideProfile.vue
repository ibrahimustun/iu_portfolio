<template>
  <section id="home" class="relative z-10 flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center pb-24 pt-12 text-center">
    <div class="mx-auto max-w-4xl">
      <div class="mx-auto w-36 sm:w-44">
        <div class="relative aspect-[4/5] overflow-hidden rounded-lg bg-white shadow-xl shadow-teal-200/60 ring-1 ring-teal-100/90">
          <img
            src="@/assets/ustun.png"
            :alt="currentTexts.portraitAlt"
            class="h-full w-full object-cover object-[50%_18%]"
            width="573"
            height="914"
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>

      <h1 class="mt-16 text-5xl font-medium tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
        {{ currentTexts.name }}
      </h1>
      <h2 class="mt-5 text-2xl font-medium tracking-tight text-slate-900 sm:text-4xl">
        {{ currentTexts.role }}
      </h2>
      <p class="mx-auto mt-7 max-w-3xl text-xl leading-9 text-slate-600 sm:text-3xl sm:leading-[1.35]">
        {{ currentTexts.description }}
      </p>

      <a
        :href="cvPath"
        download="IbrahimUstun-SoftwareDeveloperResume.pdf"
        class="download-cv-button mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-200/70 ring-1 ring-teal-500/20 transition hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-200/80"
      >
        {{ currentTexts.downloadCv }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLang } from '@/composables/useLang'

const { lang } = useLang()
const cvPath = `${import.meta.env.BASE_URL}IbrahimUstun-SoftwareDeveloperResume.pdf`

const texts = {
  en: {
    name: 'Ibrahim Ustun',
    role: 'Software Developer',
    description: 'I develop user-focused web interfaces, workflow applications that simplify production processes, and Unity-based game prototypes.',
    downloadCv: 'Download CV',
    homeLabel: 'Go to home',
    logoAlt: 'Ibrahim Ustun logo',
    portraitAlt: 'Portrait of Ibrahim Ustun',
    navigationLabel: 'Desktop navigation',
    menu: [
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#skills' },
      { name: 'Projects', href: '#projects' },
    ],
  },
  tr: {
    name: 'İbrahim Üstün',
    role: 'Yazılım Geliştirici',
    description: 'Kullanıcı odaklı web arayüzleri, üretim süreçlerini kolaylaştıran iş akışı uygulamaları ve Unity tabanlı oyun prototipleri geliştiriyorum.',
    downloadCv: 'CV indir',
    homeLabel: 'Ana sayfaya git',
    logoAlt: 'İbrahim Üstün logosu',
    navigationLabel: 'Masaüstü navigasyonu',
    menu: [
      { name: 'Hakkımda', href: '#about' },
      { name: 'Deneyim', href: '#skills' },
      { name: 'Projeler', href: '#projects' },
    ],
  },
  ru: {
    name: 'Ибрахим Устун',
    role: 'Разработчик ПО',
    description: 'Разрабатываю ориентированные на пользователя веб-интерфейсы, workflow-приложения, которые упрощают производственные процессы, и игровые прототипы на Unity.',
    downloadCv: 'Скачать CV',
    homeLabel: 'Перейти на главную',
    logoAlt: 'Логотип Ибрахима Устуна',
    navigationLabel: 'Навигация для компьютера',
    menu: [
      { name: 'Обо мне', href: '#about' },
      { name: 'Опыт', href: '#skills' },
      { name: 'Проекты', href: '#projects' },
    ],
  },
}

const currentTexts = computed(() => texts[lang.value] || texts.en)

function scrollToSection(href) {
  const section = document.querySelector(href)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
