<template>
  <section id="about" class="section-block">
    <div v-reveal>
      <h2 class="section-heading">{{ currentTexts.kicker }}</h2>

      <div class="space-y-5 text-base leading-8 text-slate-600">
        <p>{{ currentTexts.description }}</p>
        <p>{{ currentTexts.process }}</p>
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
    kicker: 'About',
    description: 'I graduated from Burdur Mehmet Akif Ersoy University, Department of Computer Engineering, in 2021. I develop web-based applications, workflow solutions that support production processes, and Unity-based games. In the software development process, I focus on bringing functionality, clean design, and user experience together.',
    process: 'I enjoy analyzing an idea and turning it into a usable digital product while continuously improving the development process. I plan user flows, build interfaces, test interactions, and work toward clearer and more efficient solutions based on the feedback that emerges.',
  },
  tr: {
    kicker: 'Hakkımda',
    description: '2021 yılında Burdur Mehmet Akif Ersoy Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum. Web tabanlı uygulamalar, üretim süreçlerini destekleyen iş akışı çözümleri ve Unity tabanlı oyunlar geliştiriyorum. Yazılım geliştirme sürecinde işlevsellik, sade tasarım ve kullanıcı deneyimini birlikte ele almaya odaklanıyorum.',
    process: 'Bir fikri analiz ederek kullanılabilir bir dijital ürüne dönüştürmekten ve geliştirme sürecini sürekli iyileştirmekten keyif alıyorum. Kullanıcı akışlarını planlıyor, arayüzleri geliştiriyor, etkileşimleri test ediyor ve ortaya çıkan geri bildirimler doğrultusunda daha anlaşılır ve verimli çözümler üretmeye çalışıyorum.',
  },
  ru: {
    kicker: 'Обо мне',
    description: 'В 2021 году я окончил факультет компьютерной инженерии Университета Бурдур имени Мехмета Акифа Эрсоя. Я разрабатываю веб-приложения, workflow-решения для поддержки производственных процессов и игры на Unity. В разработке ПО я фокусируюсь на сочетании функциональности, лаконичного дизайна и пользовательского опыта.',
    process: 'Мне нравится анализировать идею, превращать ее в удобный цифровой продукт и постоянно улучшать процесс разработки. Я планирую пользовательские сценарии, создаю интерфейсы, тестирую взаимодействия и на основе обратной связи стремлюсь делать решения более понятными и эффективными.',
  },
}

const currentTexts = computed(() => texts[lang.value] || texts.en)
</script>
