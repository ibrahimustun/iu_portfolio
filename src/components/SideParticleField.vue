<template>
  <div class="side-particle-field" aria-hidden="true">
    <canvas ref="fieldCanvas" class="side-particle-canvas"></canvas>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const fieldCanvas = ref(null)

let animationId = 0
let mediaQuery
let reduceMotionQuery
let lastFrameTime = 0
let field
let isDarkTheme = false

function randomBetween(min, max) {
  return min + Math.random() * (max - min)
}

function createParticles(width, height) {
  const areaBasedCount = Math.round((width * height) / 21000)
  const count = Math.min(Math.max(areaBasedCount, 46), 96)

  return Array.from({ length: count }, () => ({
    x: randomBetween(18, Math.max(36, width - 18)),
    y: randomBetween(28, Math.max(56, height - 28)),
    vx: randomBetween(-0.018, 0.018),
    vy: randomBetween(-0.014, 0.014),
    radius: randomBetween(1.05, 2.05),
  }))
}

function resizeField(canvas) {
  const rect = canvas.getBoundingClientRect()
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
  const width = Math.max(1, Math.floor(rect.width))
  const height = Math.max(1, Math.floor(rect.height))

  canvas.width = Math.floor(width * pixelRatio)
  canvas.height = Math.floor(height * pixelRatio)

  const context = canvas.getContext('2d')
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

  return {
    canvas,
    context,
    width,
    height,
    particles: createParticles(width, height),
  }
}

function updateThemeState() {
  isDarkTheme = document.documentElement.classList.contains('theme-dark')
}

function resizeFields() {
  updateThemeState()
  field = fieldCanvas.value ? resizeField(fieldCanvas.value) : undefined
}

function updateParticle(particle, delta) {
  particle.x += particle.vx * delta
  particle.y += particle.vy * delta

  if (particle.x < 12 || particle.x > field.width - 12) {
    particle.vx *= -1
    particle.x = Math.min(Math.max(particle.x, 12), field.width - 12)
  }

  if (particle.y < 18 || particle.y > field.height - 18) {
    particle.vy *= -1
    particle.y = Math.min(Math.max(particle.y, 18), field.height - 18)
  }
}

function drawField(delta) {
  if (!field) return

  const { context, width, height, particles } = field
  const maxDistance = Math.min(146, Math.max(112, width * 0.1))

  context.clearRect(0, 0, width, height)
  context.lineCap = 'round'

  particles.forEach((particle) => updateParticle(particle, delta))

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const first = particles[i]
      const second = particles[j]
      const distance = Math.hypot(first.x - second.x, first.y - second.y)

      if (distance < maxDistance) {
        const alpha = (1 - distance / maxDistance) * 0.22
        context.beginPath()
        context.strokeStyle = isDarkTheme ? `rgba(45, 212, 191, ${alpha})` : `rgba(15, 23, 42, ${alpha * 1.45})`
        context.lineWidth = 0.62
        context.shadowColor = isDarkTheme ? 'rgba(45, 212, 191, 0.2)' : 'rgba(15, 23, 42, 0.26)'
        context.shadowBlur = 5
        context.moveTo(first.x, first.y)
        context.lineTo(second.x, second.y)
        context.stroke()
      }
    }
  }

  particles.forEach((particle) => {
    context.beginPath()
    context.shadowColor = isDarkTheme ? 'rgba(45, 212, 191, 0.34)' : 'rgba(15, 23, 42, 0.26)'
    context.shadowBlur = 7
    context.fillStyle = isDarkTheme ? 'rgba(94, 234, 212, 0.68)' : 'rgba(15, 23, 42, 0.78)'
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
    context.fill()
  })

  context.shadowBlur = 0
}

function animate(currentTime = 0) {
  updateThemeState()
  const delta = Math.min(currentTime - lastFrameTime || 16, 34)
  lastFrameTime = currentTime

  drawField(delta)
  animationId = requestAnimationFrame(animate)
}

function shouldRun() {
  return mediaQuery?.matches && !reduceMotionQuery?.matches
}

function stop() {
  cancelAnimationFrame(animationId)
  animationId = 0
  if (field) field.context.clearRect(0, 0, field.width, field.height)
  field = undefined
}

function start() {
  stop()
  if (!shouldRun()) return

  resizeFields()
  lastFrameTime = performance.now()
  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  mediaQuery = window.matchMedia('(min-width: 768px) and (pointer: fine)')
  reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  start()

  window.addEventListener('resize', resizeFields, { passive: true })
  mediaQuery.addEventListener('change', start)
  reduceMotionQuery.addEventListener('change', start)
})

onBeforeUnmount(() => {
  stop()
  window.removeEventListener('resize', resizeFields)
  mediaQuery?.removeEventListener('change', start)
  reduceMotionQuery?.removeEventListener('change', start)
})
</script>