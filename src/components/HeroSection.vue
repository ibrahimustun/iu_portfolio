<template>
  <section id="home" class="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28">
      <div v-reveal class="relative z-10">
        <p class="section-kicker">{{ currentTexts.kicker }}</p>

        <h1 class="motion-title max-w-4xl text-balance text-5xl font-bold leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-7xl">
          {{ currentTexts.headline }}
          <span class="block text-cyan-200">{{ currentTexts.headlineAccent }}</span>
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          {{ currentTexts.description }}
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            class="ui-button ui-button-primary"
            @click="scrollToSection('#projects')"
          >
            {{ currentTexts.primaryCta }}
          </a>
          <a
            href="#skills"
            class="ui-button ui-button-secondary"
            @click="scrollToSection('#skills')"
          >
            {{ currentTexts.secondaryCta }}
          </a>
        </div>

        <dl class="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
          <div v-for="(stat, index) in currentTexts.stats" :key="stat.label" v-reveal="120 + index * 80" class="motion-card rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <dt class="text-2xl font-bold text-white">{{ stat.value }}</dt>
            <dd class="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">{{ stat.label }}</dd>
          </div>
        </dl>
      </div>

      <div v-reveal="160" class="relative mx-auto w-full max-w-[24rem] sm:max-w-[28rem] lg:max-w-[30rem]">
        <div class="motion-card relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.05] shadow-2xl shadow-slate-950/50">
          <div class="grid grid-cols-[0.95fr_1.05fr] border-b border-white/10">
            <div class="bg-slate-900">
              <img src="@/assets/ustun.png" alt="Ibrahim Ustun portrait" class="h-full min-h-72 w-full object-cover object-top" />
            </div>
            <div class="flex flex-col justify-between p-5">
              <div>
                <p class="text-sm font-semibold text-cyan-200">{{ currentTexts.cardEyebrow }}</p>
                <p class="mt-2 text-2xl font-bold leading-tight text-white">{{ currentTexts.cardTitle }}</p>
              </div>
              <div class="mt-6 flex flex-wrap gap-2">
                <span v-for="item in currentTexts.focus" :key="item" class="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>

          <div class="grid gap-0 divide-y divide-white/10 bg-slate-950/58">
            <div v-for="note in currentTexts.notes" :key="note.title" class="p-5">
              <p class="text-xs font-bold uppercase tracking-wide text-slate-500">{{ note.title }}</p>
              <p class="mt-2 text-sm leading-6 text-slate-300">{{ note.text }}</p>
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
    kicker: 'Personal project archive',
    headline: 'I collect the things I build,',
    headlineAccent: 'learn and improve here.',
    description: 'A personal portfolio shaped around web interfaces, production workflow tools and Unity prototypes. Each project shows the problem, the technical approach and what I learned.',
    primaryCta: 'Explore projects',
    secondaryCta: 'See experience',
    cardEyebrow: 'What this site is about',
    cardTitle: 'Projects, practice and the development process behind them.',
    focus: ['Vue.js', 'C#', 'Unity', 'SQL'],
    stats: [
      { value: '7+', label: 'Projects' },
      { value: 'Web', label: 'Interfaces' },
      { value: 'Unity', label: 'Game prototypes' },
    ],
    notes: [
      { title: 'Case notes', text: 'I make the product need and technical decisions visible, not only the final screen.' },
      { title: 'Experience', text: 'Factory, inventory and production workflows give practical context to what I build.' },
    ],
  },
  tr: {
    kicker: 'Kişisel proje arşivi',
    headline: 'Geliştirdiğim, denediğim',
    headlineAccent: 've öğrendiğim işleri topluyorum.',
    description: 'Web arayüzleri, üretim iş akışı araçları ve Unity prototipleri üzerine kurduğum kişisel portfolyo. Her projede problemi, teknik yaklaşımı ve öğrendiklerimi öne çıkarıyorum.',
    primaryCta: 'Projeleri keşfet',
    secondaryCta: 'Deneyimi gör',
    cardEyebrow: 'Bu sitenin odağı',
    cardTitle: 'Projeler, pratikler ve arkalarındaki geliştirme süreci.',
    focus: ['Vue.js', 'C#', 'Unity', 'SQL'],
    stats: [
      { value: '7+', label: 'Proje' },
      { value: 'Web', label: 'Arayüz' },
      { value: 'Unity', label: 'Oyun prototipi' },
    ],
    notes: [
      { title: 'Vaka notları', text: 'Sadece son ekranı değil, projenin ürün ihtiyacını ve teknik kararlarını da görünür kılıyorum.' },
      { title: 'Deneyim', text: 'Fabrika, stok ve üretim süreçleri geliştirdiğim işlere pratik bağlam sağlıyor.' },
    ],
  },
  ru: {
    kicker: 'Личный архив проектов',
    headline: 'Здесь я собираю то,',
    headlineAccent: 'что создаю, изучаю и улучшаю.',
    description: 'Персональное портфолио о веб-интерфейсах, инструментах для производственных процессов и Unity-прототипах. Каждый проект показывает задачу, технический подход и выводы.',
    primaryCta: 'Смотреть проекты',
    secondaryCta: 'Смотреть опыт',
    cardEyebrow: 'Фокус сайта',
    cardTitle: 'Проекты, практика и процесс разработки за ними.',
    focus: ['Vue.js', 'C#', 'Unity', 'SQL'],
    stats: [
      { value: '7+', label: 'Проектов' },
      { value: 'Web', label: 'Интерфейсы' },
      { value: 'Unity', label: 'Игровые прототипы' },
    ],
    notes: [
      { title: 'Заметки к кейсам', text: 'Я показываю не только финальный экран, но и продуктовую потребность и технические решения.' },
      { title: 'Опыт', text: 'Производство, склад и операционные процессы дают практический контекст моим проектам.' },
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
