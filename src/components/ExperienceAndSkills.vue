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
      { role: 'Software Development Specialist', company: 'NeonRun', date: 'June 2025 - Present', description: 'I build web interfaces for production, quality and operational workflows at NeonRun. I contributed to the Neofab and Inspectrun projects, focusing on clear daily-use screens, reliable process tracking and practical factory workflows.', skills: ['Vue.js', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Production processes', 'Quality management'] },
      { role: 'Web Design Specialist', company: 'Seta Medya', date: 'December 2024 - January 2025', description: 'I designed and prepared web pages for launch while gaining hands-on company experience. During this role, I improved my WordPress skills and learned to work within real project workflows, visual hierarchy requirements and fast revision cycles.', skills: ['Responsive design', 'WordPress', 'HTML', 'CSS', 'Visual hierarchy'] },
    ],
    skillGroups: [
      { title: 'Frontend', items: ['Vue.js', 'React', 'Next.js', 'Ionic Vue', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'WordPress'] },
      { title: 'Backend and database', items: ['Spring Boot', 'Java', 'C#', 'MySQL', 'PostgreSQL', 'SQLite'] },
      { title: 'Mobile', items: ['Ionic Capacitor'] },
      { title: 'Game development', items: ['Unity'] },
      { title: 'Tools', items: ['Git', 'Docker', 'Vite'] },
    ],
  },
  tr: {
    experienceKicker: 'Deneyim',
    skillsKicker: 'Teknolojiler',
    experiences: [
      { role: 'Yazılım Geliştirme Uzmanı', company: 'NeonRun', date: 'Haziran 2025 - Devam', description: 'NeonRun bünyesinde üretim, kalite ve operasyon süreçlerine yönelik web arayüzleri geliştiriyorum. Neofab ve Inspectrun projelerinde; günlük kullanıma uygun ekranlar, süreç takibi ve fabrika iş akışlarını sadeleştiren çözümler üzerine çalışıyorum.', skills: ['Vue.js', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Üretim süreçleri', 'Kalite yönetimi'] },
      { role: 'Web Tasarım Uzmanı', company: 'Seta Medya', date: 'Aralık 2024 - Ocak 2025', description: 'Web sayfalarının tasarım ve yayına hazırlık süreçlerinde görev alarak şirket içi çalışma deneyimi kazandım. Bu süreçte WordPress kullanımımı geliştirdim; gerçek proje akışlarına, görsel hiyerarşi beklentilerine ve hızlı revizyon süreçlerine uyum sağlamayı öğrendim.', skills: ['Responsive tasarım', 'WordPress', 'HTML', 'CSS', 'Görsel hiyerarşi'] },
    ],
    skillGroups: [
      { title: 'Frontend', items: ['Vue.js', 'React', 'Next.js', 'Ionic Vue', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'WordPress'] },
      { title: 'Backend ve veritabanı', items: ['Spring Boot', 'Java', 'C#', 'MySQL', 'PostgreSQL', 'SQLite'] },
      { title: 'Mobil', items: ['Ionic Capacitor'] },
      { title: 'Oyun geliştirme', items: ['Unity'] },
      { title: 'Araçlar', items: ['Git', 'Docker', 'Vite'] },
    ],
  },
  ru: {
    experienceKicker: 'Опыт',
    skillsKicker: 'Технологии',
    experiences: [
      { role: 'Специалист по разработке ПО', company: 'NeonRun', date: 'Июнь 2025 - настоящее время', description: 'В NeonRun разрабатываю веб-интерфейсы для производственных, операционных процессов и управления качеством. В проектах Neofab и Inspectrun работал над понятными экранами для ежедневного использования, отслеживанием процессов и практичными производственными workflow.', skills: ['Vue.js', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Производственные процессы', 'Управление качеством'] },
      { role: 'Специалист по веб-дизайну', company: 'Seta Medya', date: 'Декабрь 2024 - январь 2025', description: 'Проектировал и готовил к публикации веб-страницы, получая практический опыт работы внутри компании. В этой роли развил навыки работы с WordPress и научился адаптироваться к реальным проектным процессам, требованиям визуальной иерархии и быстрым циклам правок.', skills: ['Адаптивный дизайн', 'WordPress', 'HTML', 'CSS', 'Визуальная иерархия'] },
    ],
    skillGroups: [
      { title: 'Фронтенд', items: ['Vue.js', 'React', 'Next.js', 'Ionic Vue', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'WordPress'] },
      { title: 'Бэкенд и базы данных', items: ['Spring Boot', 'Java', 'C#', 'MySQL', 'PostgreSQL', 'SQLite'] },
      { title: 'Мобильная разработка', items: ['Ionic Capacitor'] },
      { title: 'Разработка игр', items: ['Unity'] },
      { title: 'Инструменты', items: ['Git', 'Docker', 'Vite'] },
    ],
  },
}

const currentTexts = computed(() => texts[lang.value] || texts.en)
</script>
