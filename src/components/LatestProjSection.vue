<template>
  <section id="projects" class="section-block">
    <div v-reveal>
      <h2 class="section-heading">{{ currentTexts.kicker }}</h2>
      <div class="space-y-4">
        <article v-for="project in Projects" :key="project.id" class="portfolio-row group">
          <div class="sm:order-2">
            <div class="relative overflow-hidden rounded-md">
            <img
              :src="project.images[project.currentImageIndex]"
              :alt="`${projectText(project).title} screenshot`"
              class="aspect-video w-full rounded-md object-cover object-top transition duration-500 hover:scale-[1.03] sm:w-60"
              loading="lazy"
            />
              <div v-if="project.images.length > 1" class="absolute inset-x-2 bottom-2 flex items-center justify-between">
                <button
                  type="button"
                  class="ui-icon-button ui-icon-button-overlay"
                  :aria-label="currentTexts.previousImage"
                  @click="prevImage(project)"
                >
                  ‹
                </button>
                <span class="rounded-full bg-slate-950/55 px-2 py-1 text-[0.65rem] font-semibold text-white backdrop-blur">
                  {{ project.currentImageIndex + 1 }}/{{ project.images.length }}
                </span>
                <button
                  type="button"
                  class="ui-icon-button ui-icon-button-overlay"
                  :aria-label="currentTexts.nextImage"
                  @click="nextImage(project)"
                >
                  ›
                </button>
              </div>
            </div>
            <div v-if="project.images.length > 1" class="mt-2 flex gap-1.5">
              <button
                v-for="(_, imageIndex) in project.images"
                :key="imageIndex"
                type="button"
                class="ui-carousel-dot"
                :class="imageIndex === project.currentImageIndex ? 'is-active' : ''"
                :aria-label="`${currentTexts.imageLabel} ${imageIndex + 1}`"
                @click="project.currentImageIndex = imageIndex"
              />
            </div>
          </div>

          <div class="sm:order-1">
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 class="text-base font-semibold tracking-tight text-slate-950">
                {{ projectText(project).title }}
              </h3>
              <span class="text-xs font-semibold uppercase tracking-wide text-slate-400">{{ categoryLabel(project.category) }}</span>
            </div>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ projectText(project).description }}</p>
            <p class="mt-3 text-sm leading-6 text-slate-500">
              <span class="font-medium text-slate-900">{{ currentTexts.problem }}:</span>
              {{ projectText(project).problem }}
            </p>
            <ul class="mt-4 flex flex-wrap gap-2">
              <li v-for="technology in project.technologies" :key="technology" class="tech-pill">{{ technology }}</li>
            </ul>
            <div class="mt-4 flex flex-wrap gap-2">
              <a v-if="project.gitURL" :href="project.gitURL" target="_blank" rel="noreferrer" class="ui-button ui-button-secondary ui-button-compact">GitHub</a>
              <a v-if="project.demoURL" :href="project.demoURL" target="_blank" rel="noreferrer" class="ui-button ui-button-secondary ui-button-compact">{{ currentTexts.liveDemo }}</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useLang } from '@/composables/useLang'

const { lang } = useLang()

const texts = {
  en: {
    kicker: 'Projects',
    title: 'A compact archive of what I built and why.',
    featured: 'Featured build',
    problem: 'Product need',
    result: 'Output',
    liveDemo: 'Live demo',
    gameChip: 'Playable prototype',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    imageLabel: 'Show image',
    categories: [
      { value: 'all', label: 'All' },
      { value: 'web-app', label: 'Web applications' },
      { value: 'frontend', label: 'Frontend' },
      { value: 'game', label: 'Game development' },
    ],
    projects: {
      1: {
        title: 'Uplify',
        description: 'A personal development application built for tracking goals, habits and progress.',
        problem: 'Users needed a simple flow for staying consistent without relying on complex productivity tools.',
        result: 'A clean Vue interface with goal tracking, visual progress and a calmer daily check-in flow.',
      },
      2: {
        title: 'Ibu',
        description: 'A 2D platform game that helps primary school students practice basic math.',
        problem: 'When math exercises are disconnected from play, they can create a sense of repetition for children.',
        result: 'Unity gameplay connects simple operations with movement, feedback and colorful levels.',
      },
      3: {
        title: 'SkyUp',
        description: 'A warehouse management application developed for factory stock and inventory processes.',
        problem: 'Manual inventory processes reduced visibility and made stock movements harder to track.',
        result: 'A web application with Java, MySQL and Vue that makes stock movements easier to record, track and control.',
      },
      4: {
        title: 'Frog Feeder',
        description: 'A Unity prototype focused on fast movement, timing and a simple game feel.',
        problem: 'In small prototypes, the core mechanic needs to become clear before moving into larger systems.',
        result: 'A compact C# prototype with readable player feedback and simple arcade interactions.',
      },
      5: {
        title: '2048',
        description: 'A desktop version of the 2048 puzzle game made with Unity and C#.',
        problem: 'A familiar logic game needed to be rebuilt with smooth user input and clear state changes.',
        result: 'A clean puzzle implementation with predictable controls and a minimal visual system.',
      },
      6: {
        title: 'Mr. Karpuz',
        description: 'A mobile platformer and early Unity learning project.',
        problem: 'Creating a mobile platformer requires balancing simple controls with engaging level pacing.',
        result: 'A colorful prototype that helped establish my first mobile game design workflow.',
      },
      7: {
        title: 'USTUN',
        description: 'A handmade product e-commerce website built with HTML, CSS and PHP.',
        problem: 'Small product catalogs need a simple browsing experience and clear purchase intent.',
        result: 'A straightforward storefront structure for exploring product details and contacting the seller.',
      },
    },
  },
  tr: {
    kicker: 'Projelerim',
    title: 'Ne yaptığımı ve neden yaptığımı anlatan kısa bir arşiv.',
    featured: 'Öne çıkan proje',
    problem: 'Ürün ihtiyacı',
    result: 'Çıktı',
    liveDemo: 'Canlı demo',
    gameChip: 'Oynanabilir prototip',
    previousImage: 'Önceki görsel',
    nextImage: 'Sonraki görsel',
    imageLabel: 'Görseli göster',
    categories: [
      { value: 'all', label: 'Hepsi' },
      { value: 'web-app', label: 'Web uygulamaları' },
      { value: 'frontend', label: 'Frontend' },
      { value: 'game', label: 'Oyun geliştirme' },
    ],
    projects: {
      1: {
        title: 'Uplify',
        description: 'Hedef, alışkanlık ve ilerleme takibi için geliştirilmiş kişisel gelişim uygulaması.',
        problem: 'Kullanıcıların karmaşık üretkenlik araçlarına ihtiyaç duymadan düzenli kalabileceği sade bir akış gerekiyordu.',
        result: 'Hedef takibi, görsel ilerleme ve daha sakin günlük kontrol deneyimi sunan Vue tabanlı bir arayüz.',
      },
      2: {
        title: 'Ibu',
        description: 'İlkokul öğrencilerinin temel matematik pratiği yapmasına yardım eden 2D platform oyunu.',
        problem: 'Matematik alıştırmaları oyundan kopuk olduğunda çocuklar için tekrar hissi oluşturabiliyor.',
        result: 'Unity oynanışı, basit işlemleri hareket, geri bildirim ve renkli seviyelerle birleştiriyor.',
      },
      3: {
        title: 'SkyUp',
        description: 'Fabrika stok ve envanter süreçleri için geliştirilmiş depo yönetim uygulaması.',
        problem: 'Manuel envanter süreçleri görünürlüğü azaltıyor ve stok hareketlerini takip etmeyi zorlaştırıyordu.',
        result: 'Java, MySQL ve Vue ile stok hareketlerinin kaydını, takibini ve kontrolünü kolaylaştıran web uygulaması.',
      },
      4: {
        title: 'Frog Feeder',
        description: 'Hızlı hareket, zamanlama ve basit oyun hissine odaklanan Unity prototipi.',
        problem: 'Küçük prototiplerde büyük sistemlere geçmeden önce ana mekaniğin netleşmesi gerekir.',
        result: 'Net oyuncu geri bildirimi ve sade arcade etkileşimleri olan kompakt C# prototipi.',
      },
      5: {
        title: '2048',
        description: 'Unity ve C# ile geliştirilmiş masaüstü 2048 bulmaca oyunu.',
        problem: 'Bilinen bir mantık oyununu akıcı kullanıcı girişi ve net durum değişimleriyle yeniden kurmak gerekiyordu.',
        result: 'Tahmin edilebilir kontroller ve minimal görsel sistemle temiz bir bulmaca uygulaması.',
      },
      6: {
        title: 'Mr. Karpuz',
        description: 'Mobil platform oyunu ve erken dönem Unity öğrenme projesi.',
        problem: 'Mobil platform oyununda basit kontroller ile akıcı seviye temposunu dengelemek gerekiyordu.',
        result: 'İlk mobil oyun tasarım akışını kurmamı sağlayan renkli bir prototip.',
      },
      7: {
        title: 'USTUN',
        description: 'HTML, CSS ve PHP ile hazırlanmış el yapımı ürün e-ticaret sitesi.',
        problem: 'Küçük ürün katalogları için sade gezinme ve net satın alma yönlendirmesi gerekiyordu.',
        result: 'Ürün detaylarını inceleme ve satıcıyla iletişime geçme üzerine kurulu basit vitrin yapısı.',
      },
    },
  },
  ru: {
    kicker: 'Мои проекты',
    title: 'Короткий архив того, что я сделал и зачем.',
    featured: 'Ключевой проект',
    problem: 'Продуктовая потребность',
    result: 'Результат',
    liveDemo: 'Демо',
    gameChip: 'Игровой прототип',
    previousImage: 'Предыдущее изображение',
    nextImage: 'Следующее изображение',
    imageLabel: 'Показать изображение',
    categories: [
      { value: 'all', label: 'Все' },
      { value: 'web-app', label: 'Веб-приложения' },
      { value: 'frontend', label: 'Фронтенд' },
      { value: 'game', label: 'Разработка игр' },
    ],
    projects: {
      1: {
        title: 'Uplify',
        description: 'Приложение для личного развития, созданное для отслеживания целей, привычек и прогресса.',
        problem: 'Пользователям был нужен простой сценарий, чтобы оставаться регулярными без сложных инструментов продуктивности.',
        result: 'Интерфейс на Vue с отслеживанием целей, визуальным прогрессом и более спокойной ежедневной проверкой.',
      },
      2: {
        title: 'Ibu',
        description: '2D-платформер, который помогает ученикам начальной школы практиковать базовую математику.',
        problem: 'Когда математические упражнения оторваны от игры, у детей может возникать ощущение повторения.',
        result: 'Игровой процесс на Unity объединяет простые операции, движение, обратную связь и яркие уровни.',
      },
      3: {
        title: 'SkyUp',
        description: 'Приложение для управления складом, разработанное для процессов учета запасов и инвентаризации на производстве.',
        problem: 'Ручные процессы инвентаризации снижали прозрачность и затрудняли отслеживание движения запасов.',
        result: 'Веб-приложение на Java, MySQL и Vue, которое упрощает запись, отслеживание и контроль движения запасов.',
      },
      4: {
        title: 'Frog Feeder',
        description: 'Прототип на Unity с фокусом на быстром движении, тайминге и простом ощущении игры.',
        problem: 'В небольших прототипах основная механика должна стать понятной до перехода к большим системам.',
        result: 'Компактный C#-прототип с понятной обратной связью для игрока и простыми аркадными взаимодействиями.',
      },
      5: {
        title: '2048',
        description: 'Настольная игра-головоломка 2048, разработанная на Unity и C#.',
        problem: 'Нужно было заново собрать знакомую логическую игру с плавным пользовательским вводом и понятными изменениями состояния.',
        result: 'Чистая реализация головоломки с предсказуемым управлением и минимальным визуальным стилем.',
      },
      6: {
        title: 'Mr. Karpuz',
        description: 'Мобильный платформер и ранний проект изучения Unity.',
        problem: 'В мобильном платформере важно балансировать простое управление и темп уровней.',
        result: 'Яркий прототип, который помог мне выстроить первый процесс дизайна мобильной игры.',
      },
      7: {
        title: 'USTUN',
        description: 'Сайт электронной коммерции для товаров ручной работы, подготовленный на HTML, CSS и PHP.',
        problem: 'Небольшим каталогам товаров нужны простая навигация и понятное направление к покупке.',
        result: 'Простая витрина для просмотра деталей продуктов и связи с продавцом.',
      },
    },
  },
}

const Projects = ref([
  {
    id: 1,
    category: 'frontend',
    featured: true,
    images: [
      new URL('@/assets/upfily.png', import.meta.url).href,
      new URL('@/assets/upfily_1.png', import.meta.url).href,
      new URL('@/assets/upfily_2.png', import.meta.url).href,
      new URL('@/assets/upfily_3.png', import.meta.url).href,
    ],
    currentImageIndex: 0,
    gitURL: 'https://github.com/ibrahimustun/Upfily',
    technologies: ['Vue.js', 'TypeScript', 'Bootstrap'],
  },
  {
    id: 3,
    category: 'web-app',
    featured: true,
    images: [
      new URL('@/assets/skyup_3.png', import.meta.url).href,
      new URL('@/assets/skyup.png', import.meta.url).href,
      new URL('@/assets/skyup_1.png', import.meta.url).href,
      new URL('@/assets/skyup_2.png', import.meta.url).href,
    ],
    currentImageIndex: 0,
    technologies: ['Java Spring Boot', 'Vue.js', 'MySQL', 'Bootstrap'],
  },
  {
    id: 2,
    category: 'game',
    images: [
      new URL('@/assets/ibu.png', import.meta.url).href,
      new URL('@/assets/ibu_1.png', import.meta.url).href,
      new URL('@/assets/ibu_2.png', import.meta.url).href,
    ],
    currentImageIndex: 0,
    gitURL: 'https://github.com/ibrahimustun/Ibu',
    technologies: ['C#', 'Unity'],
  },
  {
    id: 4,
    category: 'game',
    images: [
      new URL('@/assets/frogfeeder_3.png', import.meta.url).href,
      new URL('@/assets/frogfeeder.png', import.meta.url).href,
      new URL('@/assets/frogfeeder_1.png', import.meta.url).href,
      new URL('@/assets/frogfeeder_2.png', import.meta.url).href,
    ],
    currentImageIndex: 0,
    gitURL: 'https://github.com/ibrahimustun/FrogFeeder',
    technologies: ['C#', 'Unity'],
  },
  {
    id: 5,
    category: 'game',
    images: [
      new URL('@/assets/2048.png', import.meta.url).href,
      new URL('@/assets/2048_1.png', import.meta.url).href,
      new URL('@/assets/2048_2.png', import.meta.url).href,
      new URL('@/assets/2048_3.png', import.meta.url).href,
    ],
    currentImageIndex: 0,
    gitURL: 'https://github.com/ibrahimustun/2048-Game',
    technologies: ['C#', 'Unity'],
  },
  {
    id: 6,
    category: 'game',
    images: [
      new URL('@/assets/misterkarpuz.png', import.meta.url).href,
      new URL('@/assets/misterkarpuz_1.png', import.meta.url).href,
      new URL('@/assets/misterkarpuz_2.png', import.meta.url).href,
    ],
    currentImageIndex: 0,
    gitURL: 'https://github.com/ibrahimustun/Mister-Karpuz',
    technologies: ['C#', 'Unity'],
  },
  {
    id: 7,
    category: 'frontend',
    images: [new URL('@/assets/e_ustun.png', import.meta.url).href],
    currentImageIndex: 0,
    gitURL: 'https://github.com/ibrahimustun/USTUN---E-Commerce-Web-Site',
    technologies: ['HTML', 'CSS', 'PHP'],
  },
])

const currentTexts = computed(() => texts[lang.value] || texts.en)

function projectText(project) {
  return currentTexts.value.projects[project.id]
}

function categoryLabel(category) {
  return currentTexts.value.categories.find((item) => item.value === category)?.label || category
}

function nextImage(project) {
  project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length
}

function prevImage(project) {
  project.currentImageIndex = (project.currentImageIndex - 1 + project.images.length) % project.images.length
}
</script>
