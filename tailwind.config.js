/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      darkmode: 'class',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'selector',
}

