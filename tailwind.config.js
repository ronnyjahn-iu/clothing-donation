/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {
        colors: {
            lightbrown: '#fffaf3',
            darkgray: '#54494b',
            primary: '#dd7279',
          },
      },
    },
    plugins: [forms],
  }