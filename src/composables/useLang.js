import { ref } from 'vue'

const supportedLangs = ['en', 'tr', 'ru']
const storedLang = localStorage.getItem('language')
const lang = ref(supportedLangs.includes(storedLang) ? storedLang : 'en')

export function useLang() {
  function setLang(newLang) {
    lang.value = supportedLangs.includes(newLang) ? newLang : 'en'
    localStorage.setItem('language', lang.value)
    window.dispatchEvent(new CustomEvent('language-changed', { detail: lang.value }))
  }
  return { lang, setLang }
}