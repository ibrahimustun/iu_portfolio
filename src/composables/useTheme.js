import { ref } from 'vue'

const supportedThemes = ['light', 'dark']
const storedTheme = localStorage.getItem('theme')
const theme = ref(supportedThemes.includes(storedTheme) ? storedTheme : getThemeByTime())

function getThemeByTime(date = new Date()) {
  const hour = date.getHours()
  return hour >= 19 || hour < 7 ? 'dark' : 'light'
}

function applyTheme(value) {
  document.documentElement.classList.toggle('theme-dark', value === 'dark')
  document.documentElement.style.colorScheme = value === 'dark' ? 'dark' : 'light'
}

applyTheme(theme.value)

export function useTheme() {
  function setTheme(newTheme) {
    theme.value = supportedThemes.includes(newTheme) ? newTheme : 'light'
    localStorage.setItem('theme', theme.value)
    applyTheme(theme.value)
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme, setTheme, toggleTheme }
}
