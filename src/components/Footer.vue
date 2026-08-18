<script setup>
const socialLinks = [
  { label: 'E-posta', href: 'mailto:ustunibrahim32@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/ibrahimustun' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ibrahimustun' },
  //{ label: 'Instagram', href: 'https://instagram.com/ibrahimustun97' },
  { label: 'Telegram', href: 'https://t.me/ustun97' },
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

    <div class="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6">
      <div class="flex w-full flex-wrap justify-center gap-3">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
          class="ui-button ui-button-primary shrink-0"
        >
          {{ link.label }}
        </a>
      </div>

      <img
        src="@/assets/brand-logo.png"
        alt="Ibrahim Ustun logo"
        class="footer-logo h-7 w-auto max-w-[104px] object-contain mix-blend-multiply"
      />
    </div>
  </footer>
</template>
