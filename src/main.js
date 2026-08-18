import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

let revealObserver
let pointerGlowFrame = 0
let pointerGlowX = 0
let pointerGlowY = 0

function setupPointerGlow() {
  const supportsFinePointer = window.matchMedia('(pointer: fine)').matches
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!supportsFinePointer || prefersReducedMotion) return

  function updateGlow() {
    document.documentElement.style.setProperty('--pointer-glow-x', `${pointerGlowX}px`)
    document.documentElement.style.setProperty('--pointer-glow-y', `${pointerGlowY}px`)
    document.body.classList.add('pointer-glow-active')
    pointerGlowFrame = 0
  }

  function handlePointerMove(event) {
    pointerGlowX = event.clientX
    pointerGlowY = event.clientY

    if (!pointerGlowFrame) {
      pointerGlowFrame = requestAnimationFrame(updateGlow)
    }
  }

  function hideGlow() {
    document.body.classList.remove('pointer-glow-active')
  }

  window.addEventListener('pointermove', handlePointerMove, { passive: true })
  window.addEventListener('pointerleave', hideGlow)
  window.addEventListener('blur', hideGlow)
}

app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal-on-scroll')
    el.style.setProperty('--reveal-delay', `${binding.value || 0}ms`)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    revealObserver ||= new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 }
    )

    revealObserver.observe(el)
  },
})

app.mount('#app')

requestAnimationFrame(setupPointerGlow)
