<script setup>
import { useLang } from '@/composables/useLang'

const { lang } = useLang()
const footerTexts = {
  en: 'All Rights Reserved © İbrahim Üstün 2025',
  tr: 'Tüm Hakları Saklıdır © İbrahim Üstün 2025',
  ru: 'Все права защищены © İbrahim Üстün 2025'
}
</script>

<template>
<footer class="mt-8 border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
    <div class="container p-12 flex justify-between items-center">
        <div>
            <img src="@/assets/iu.png" alt="Logo" class="h-10">
        </div>
        <p class="text-slate-600">{{ footerTexts[lang.value] }}</p>
    </div>
</footer>
</template>