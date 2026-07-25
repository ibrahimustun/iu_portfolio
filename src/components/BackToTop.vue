<template>
  <button
    v-if="isVisible"
    type="button"
    class="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-cyan-300 text-2xl font-bold text-slate-950 shadow-2xl shadow-slate-950/40 transition hover:bg-emerald-300"
    aria-label="Back to top"
    @click="scrollToTop"
  >
    ↑
  </button>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isVisible = ref(false)

function handleScroll() {
  isVisible.value = window.scrollY > 420
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
