<template>
  <button
    v-if="isVisible"
    type="button"
    class="ui-icon-button ui-icon-button-floating"
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
