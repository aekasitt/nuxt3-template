// ~/tailwind.config.ts

export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
