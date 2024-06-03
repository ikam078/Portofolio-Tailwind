/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#2563EB',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      screens: {
        '2xl': '1230px',
      },
      screens: {
        '2xl': '1230px',
      }
    }
  },
};



