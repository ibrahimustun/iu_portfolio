<template>
  <section id="experience" class="section-block">
    <div v-reveal>
      <h2 class="section-heading">{{ currentTexts.experienceKicker }}</h2>

      <div class="space-y-4">
        <article v-for="item in currentTexts.experiences" :key="item.company" class="portfolio-row experience-row group">
          <div class="sm:pt-1">
            <p class="portfolio-date">{{ item.date }}</p>
            <p class="mt-2 text-sm font-semibold text-slate-700">{{ item.company }}</p>
          </div>
          <div>
            <h3 class="text-base font-semibold tracking-tight text-slate-950">
              {{ item.role }}
            </h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.description }}</p>
            <ul class="mt-4 flex flex-wrap gap-2">
              <li v-for="skill in item.skills" :key="skill" class="tech-pill">{{ skill }}</li>
            </ul>
          </div>
        </article>
      </div>

      <div id="skills" class="mt-12 scroll-mt-24">
        <h3 class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{{ currentTexts.skillsKicker }}</h3>
        <div class="mt-5 space-y-6">
          <div v-for="group in currentTexts.skillGroups" :key="group.title">
            <p class="text-sm font-semibold text-slate-950">{{ group.title }}</p>
            <ul class="mt-3 flex flex-wrap gap-2">
              <li v-for="skill in group.items" :key="skill" class="tech-pill">{{ skill }}</li>
            </ul>
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
    experienceKicker: 'Experience',
    skillsKicker: 'Technologies',
    experiences: [
      { role: 'Software Development Specialist', company: 'NeonRun', date: 'June 2025 - Present', description: 'I develop web interfaces for production operations and quality management processes that stay clear for daily factory use.', skills: ['Vue.js', 'Java Spring Boot', 'SQL', 'Production processes', 'Quality management'] },
      { role: 'Web Design Specialist', company: 'Seta Medya', date: 'December 2024 - January 2025', description: 'I designed and prepared web pages for launch with a focus on visual hierarchy, responsive structure and fast revisions.', skills: ['Responsive design', 'WordPress', 'HTML', 'CSS', 'Visual hierarchy'] },
      { role: 'Software Developer', company: 'Itimat Asansor', date: 'Sep 2024 - Dec 2024', description: 'I built a warehouse management application that made inventory movements easier to record, monitor and audit.', skills: ['Java Spring Boot', 'MySQL', 'Vue.js', 'Inventory management'] },
    ],
    skillGroups: [
      { title: 'Frontend', items: ['Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'WordPress'] },
      { title: 'Backend and data', items: ['Java Spring Boot', 'C#', 'SQL', 'MySQL', 'Docker'] },
      { title: 'Game development', items: ['Unity', '2D mechanics', 'Game prototyping', 'Git'] },
    ],
  },
  tr: {
    experienceKicker: 'Deneyim',
    skillsKicker: 'Teknolojiler',
    experiences: [
      { role: 'Yazılım Geliştirme Uzmanı', company: 'NeonRun', date: 'Haziran 2025 - Devam', description: 'Üretim operasyonları ve kalite yönetimi süreçleri için günlük fabrika kullanımında anlaşılır kalan web arayüzleri geliştiriyorum.', skills: ['Vue.js', 'Java Spring Boot', 'SQL', 'Üretim süreçleri', 'Kalite yönetimi'] },
      { role: 'Web Tasarım Uzmanı', company: 'Seta Medya', date: 'Aralık 2024 - Ocak 2025', description: 'Görsel hiyerarşi, responsive yapı ve hızlı revizyon odağıyla web sayfaları tasarlayıp yayına hazırladım.', skills: ['Responsive tasarım', 'WordPress', 'HTML', 'CSS', 'Görsel hiyerarşi'] },
      { role: 'Yazılım Geliştirici', company: 'İtimat Asansör', date: 'Eylül 2024 - Aralık 2024', description: 'Stok hareketlerinin kaydedilmesini, izlenmesini ve kontrol edilmesini kolaylaştıran depo yönetim uygulaması geliştirdim.', skills: ['Java Spring Boot', 'MySQL', 'Vue.js', 'Stok yönetimi'] },
    ],
    skillGroups: [
      { title: 'Frontend', items: ['Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'WordPress'] },
      { title: 'Backend ve veri', items: ['Java Spring Boot', 'C#', 'SQL', 'MySQL', 'Docker'] },
      { title: 'Oyun geliştirme', items: ['Unity', '2D mekanikler', 'Oyun prototipleme', 'Git'] },
    ],
  },
  ru: {
    experienceKicker: 'Опыт',
    skillsKicker: 'Технологии',
    experiences: [
      { role: 'Специалист по разработке ПО', company: 'NeonRun', date: 'Июнь 2025 - настоящее время', description: 'Разрабатываю веб-интерфейсы для производственных операций и процессов управления качеством, которые остаются понятными для ежедневного использования на производстве.', skills: ['Vue.js', 'Java Spring Boot', 'SQL', 'Производственные процессы', 'Управление качеством'] },
      { role: 'Специалист по веб-дизайну', company: 'Seta Medya', date: 'Декабрь 2024 - январь 2025', description: 'Проектировал и готовил к публикации веб-страницы с фокусом на визуальную иерархию, адаптивную структуру и быстрые правки.', skills: ['Адаптивный дизайн', 'WordPress', 'HTML', 'CSS', 'Визуальная иерархия'] },
      { role: 'Разработчик ПО', company: 'İtimat Asansör', date: 'Сентябрь 2024 - декабрь 2024', description: 'Разработал приложение для управления складом, которое упростило запись, отслеживание и контроль движения запасов.', skills: ['Java Spring Boot', 'MySQL', 'Vue.js', 'Управление запасами'] },
    ],
    skillGroups: [
      { title: 'Фронтенд', items: ['Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'WordPress'] },
      { title: 'Бэкенд и данные', items: ['Java Spring Boot', 'C#', 'SQL', 'MySQL', 'Docker'] },
      { title: 'Разработка игр', items: ['Unity', '2D-механики', 'Прототипирование игр', 'Git'] },
    ],
  },
}

const currentTexts = computed(() => texts[lang.value] || texts.en)
</script>
