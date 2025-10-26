<template>
<section ref="sectionRef" class="text-white mt-20 relative" id="contact">
  <h2 class="text-4xl font-bold text-white text-center mb-12 px-4">{{ currentTexts.letsConnect }}</h2>

  <div class="relative px-4 mt-8" data-aos="zoom-in-up">
    <div class="flex flex-wrap justify-center gap-8 md:gap-12">
      <!-- Email (start noktası için ref) -->
      <a ref="startRef" href="mailto:ustunibrahim32@gmail.com" target="_blank" class="flex flex-col items-center group">
        <div class="p-5 mb-3 bg-[#111a3e] rounded-full border-2 border-[#111a3e] transition-all group-hover:border-primary">
          <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="Email" class="w-10 h-10">
        </div>
        <span class="text-base opacity-80 group-hover:opacity-100">{{ currentTexts.email }}</span>
      </a>

      <!-- LinkedIn -->
      <a href="https://linkedin.com/in/ibrahimustun" target="_blank" class="flex flex-col items-center group">
        <div class="p-5 mb-3 bg-[#111a3e] rounded-full border-2 border-[#111a3e] transition-all group-hover:border-primary">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" class="w-10 h-10">
        </div>
        <span class="text-base opacity-80 group-hover:opacity-100">LinkedIn</span>
      </a>

      <!-- GitHub -->
      <a href="https://github.com/ibrahimustun" target="_blank" class="flex flex-col items-center group">
        <div class="p-5 mb-3 bg-[#111a3e] rounded-full border-2 border-[#111a3e] transition-all group-hover:border-primary">
          <img src="https://img.icons8.com/ios-glyphs/50/ffffff/github.png" alt="GitHub" class="w-10 h-10">
        </div>
        <span class="text-base opacity-80 group-hover:opacity-100">GitHub</span>
      </a>

      <!-- Instagram -->
      <a href="https://instagram.com/ibrahimustun97" target="_blank" class="flex flex-col items-center group">
        <div class="p-5 mb-3 bg-[#111a3e] rounded-full border-2 border-[#111a3e] transition-all group-hover:border-primary">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" class="w-10 h-10">
        </div>
        <span class="text-base opacity-80 group-hover:opacity-100">Instagram</span>
      </a>

      <!-- YouTube -->
      <a href="#" target="_blank" class="flex flex-col items-center group">
        <div class="p-5 mb-3 bg-[#111a3e] rounded-full border-2 border-[#111a3e] transition-all group-hover:border-primary">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="YouTube" class="w-10 h-10">
        </div>
        <span class="text-base opacity-80 group-hover:opacity-100">YouTube</span>
      </a>

      <!-- Google Play -->
      <a href="#" target="_blank" class="flex flex-col items-center group">
        <div class="p-5 mb-3 bg-[#111a3e] rounded-full border-2 border-[#111a3e] transition-all group-hover:border-primary">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/google-play.png" alt="Google Play" class="w-10 h-10">
        </div>
        <span class="text-base opacity-80 group-hover:opacity-100">{{ currentTexts.playStore }}</span>
      </a>

      <!-- Telegram (end noktası için ref) -->
      <a ref="endRef" href="https://t.me/ibrahimustun97" target="_blank" class="flex flex-col items-center group">
        <div class="p-5 mb-3 bg-[#111a3e] rounded-full border-2 border-[#111a3e] transition-all group-hover:border-primary">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/telegram-app.png" alt="Telegram" class="w-10 h-10">
        </div>
        <span class="text-base opacity-80 group-hover:opacity-100">Telegram</span>
      </a>
    </div>
  </div>

  <!-- Floating image: left aligned relative to section, X hareketi JS ile hesaplanan --start/--end değişkenleri ile kontrol ediliyor -->
  <div ref="floatRef" class="absolute bottom-0 z-20 pointer-events-none floating-right" aria-hidden="true">
    <img :src="imageAnim" alt="Decoration" class="w-12 md:w-14 lg:w-16" />
  </div>
</section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useLang } from '@/composables/useLang'
import imageAnim from '@/assets/wolf_anim.gif'

const { lang } = useLang()

const texts = {
  en: { letsConnect: "Let's Connect", email: "Email", playStore: "Play Store" },
  tr: { letsConnect: "İletişim", email: "E-posta", playStore: "Play Store" },
  ru: { letsConnect: "Свяжитесь со мной", email: "Почта", playStore: "Play Store" }
}
const currentTexts = computed(() => texts[lang.value] || texts.en)

// refs for DOM measurement
const sectionRef = ref(null)
const startRef = ref(null) // email
const endRef = ref(null)   // telegram
const floatRef = ref(null)

let resizeHandler = null

function updateAnimationBounds() {
  const sectionEl = sectionRef.value
  const startEl = startRef.value
  const endEl = endRef.value
  const floatEl = floatRef.value
  if (!sectionEl || !startEl || !endEl || !floatEl) return

  const sectionRect = sectionEl.getBoundingClientRect()
  const startRect = startEl.getBoundingClientRect()
  const endRect = endEl.getBoundingClientRect()
  const floatRect = floatEl.getBoundingClientRect()

  const floatHalf = floatRect.width / 2

  // offsets: başlangıçta email'in biraz solunda, sonda telegram'un biraz sağına
  const leftOffset = 12
  const rightOffset = 12

  // center positions relative to section's left
  const startCenterX = (startRect.left + startRect.width / 2) - sectionRect.left - floatHalf - leftOffset
  const endCenterX = (endRect.left + endRect.width / 2) - sectionRect.left - floatHalf + rightOffset

  const startPx = Number.isFinite(startCenterX) ? `${Math.round(startCenterX)}px` : '0px'
  const endPx = Number.isFinite(endCenterX) ? `${Math.round(endCenterX)}px` : '100px'

  // SWAP start/end so animation goes from right (end) to left (start)
  floatEl.style.setProperty('--start', endPx)
  floatEl.style.setProperty('--end', startPx)
}

onMounted(async () => {
  await nextTick()
  updateAnimationBounds()
  resizeHandler = () => updateAnimationBounds()
  window.addEventListener('resize', resizeHandler)
  window.addEventListener('orientationchange', resizeHandler)
})

onBeforeUnmount(() => {
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
    window.removeEventListener('orientationchange', resizeHandler)
  }
})
</script>

<style scoped>
.floating-right {
  left: 0;
  /* görseli biraz daha aşağı taşımak için translateY arttırıldı (95%) */
  transform: translateY(95%) translateX(var(--start, 0px));
  animation: moveRight linear infinite;
  animation-duration: 10s;
  will-change: transform, opacity;
  pointer-events: none;
}

@keyframes moveRight {
 
  6% {
    opacity: 1;
    transform: translateY(95%) translateX(calc(var(--start, 0px) + ((var(--end, 100px) - var(--start, 0px)) * 0)));
  }
  86% {
    transform: translateY(95%) translateX(var(--end, 100px));
    opacity: 1;
  }
  93% {
    transform: translateY(95%) translateX(var(--end, 100px));
    opacity: 0;
  }
  94% {
    /* teleport back to start while hidden */
    transform: translateY(95%) translateX(var(--start, 0px));
    opacity: 0;
  }
  100% {
    transform: translateY(95%) translateX(var(--start, 0px));
    opacity: 1;
  }
}

/* Küçük ekranlarda süreyi biraz azalt ve Y ofsetini biraz büyüt (daha aşağı) */
@media (max-width: 640px) {
  .floating-right {
    animation-duration: 8s;
    /* küçük ekranlarda daha aşağıya kaydır (105%) */
    transform: translateY(105%) translateX(var(--start, 0px));
  }

  @keyframes moveRight {
    6% {
      opacity: 1;
      transform: translateY(105%) translateX(calc(var(--start, 0px) + ((var(--end, 100px) - var(--start, 0px)) * 0)));
    }
    86% {
      transform: translateY(105%) translateX(var(--end, 100px));
      opacity: 1;
    }
    93% {
      transform: translateY(105%) translateX(var(--end, 100px));
      opacity: 0;
    }
    94% {
      transform: translateY(105%) translateX(var(--start, 0px));
      opacity: 0;
    }
    100% {
      transform: translateY(105%) translateX(var(--start, 0px));
      opacity: 1;
    }
  }
}

/* prefers-reduced-motion için animasyonu kapat */
@media (prefers-reduced-motion: reduce) {
  .floating-right {
    animation: none;
    transform: translateY(95%) translateX(var(--start, 0px));
    opacity: 1;
  }
}
</style>