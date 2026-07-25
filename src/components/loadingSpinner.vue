<template>
  <div class="flex h-full items-center justify-center">
    <div class="relative flex h-20 w-20 items-center justify-center">
      <span class="absolute h-full w-full animate-ping rounded-full bg-teal-300/25"></span>
      <svg class="relative h-16 w-16 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="spinnerGradient" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#14b8a6" />
            <stop offset="58%" stop-color="#2dd4bf" />
            <stop offset="100%" stop-color="#0f766e" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="18" fill="none" stroke="#ccfbf1" stroke-width="5" />
        <path
          fill="none"
          stroke="url(#spinnerGradient)"
          stroke-linecap="round"
          stroke-width="5"
          d="M42 24a18 18 0 0 1-30.73 12.73"
        />
      </svg>
      <span class="absolute h-3 w-3 rounded-full bg-teal-600 shadow-lg shadow-teal-300/70"></span>
    </div>
  </div>
</template>
