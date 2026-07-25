<script setup>
const socialLinks = [
  { label: 'E-posta', href: 'mailto:ustunibrahim32@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/ibrahimustun' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ibrahimustun' },
  { label: 'Instagram', href: 'https://instagram.com/ibrahimustun97' },
  { label: 'Telegram', href: 'https://t.me/ibrahimustun97' },
]
</script>

<template>
  <footer id="contact" class="scroll-mt-24 py-12 text-sm leading-6 text-slate-500">
    <div class="footer-runner-line mx-auto mb-10 max-w-5xl">
      <img
        src="@/assets/wolf_anim.gif"
        alt=""
        class="footer-runner-wolf"
        aria-hidden="true"
      />
    </div>

    <div class="mx-auto grid max-w-5xl items-center gap-8 px-6 sm:grid-cols-[7rem_1fr_7rem]">
      <div class="hidden sm:block"></div>

      <div class="flex flex-nowrap justify-start gap-3 overflow-x-auto whitespace-nowrap px-1 sm:col-start-2 sm:justify-center sm:overflow-visible">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
          class="shrink-0 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-teal-100/80 transition hover:-translate-y-0.5 hover:text-teal-800 hover:shadow-md hover:shadow-teal-100/80"
        >
          {{ link.label }}
        </a>
      </div>

      <img
        src="@/assets/brand-logo.png"
        alt="Ibrahim Ustun logo"
        class="footer-logo mx-auto h-7 w-auto max-w-[104px] object-contain mix-blend-multiply sm:col-start-3 sm:mx-0 sm:justify-self-end"
      />
    </div>
  </footer>
</template>
