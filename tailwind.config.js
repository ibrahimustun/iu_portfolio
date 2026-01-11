/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#0cc0df',
        secondary: '#004aad',
        'dark-bg': '#111827',
        'card-bg': '#111a3e',
      },
    },
  },
  plugins: [],
};
