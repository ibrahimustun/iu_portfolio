<template>
  <div class="relative isolate min-h-screen text-slate-950">
    <div class="pointer-glow" aria-hidden="true"></div>
    <SideParticleField />
    <Suspense>
      <template #default>
        <div class="relative z-10">
          <NavBar />
          <div class="mx-auto min-h-screen max-w-5xl px-6 pt-28 md:px-10">
            <SideProfile />
            <main id="content" class="mx-auto max-w-3xl">
              <AboutSection />
              <ExperienceAndSkills />
              <LatestProjSection />
              <Footer />
            </main>
          </div>
        </div>
      </template>
      <template #fallback>
        <div class="flex min-h-screen items-center justify-center">
          <loadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import loadingSpinner from './components/loadingSpinner.vue'

const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'))
const SideProfile = defineAsyncComponent(() => import('@/components/SideProfile.vue'))
const SideParticleField = defineAsyncComponent(() => import('@/components/SideParticleField.vue'))
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'))
const LatestProjSection = defineAsyncComponent(() => import('@/components/LatestProjSection.vue'))
const ExperienceAndSkills = defineAsyncComponent(() => import('@/components/ExperienceAndSkills.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
</script>

<style>
* {
  scrollbar-width: thin;
  scrollbar-color: #14b8a6 #f0fdfa;
}
</style>
