import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

let revealObserver

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
