/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF7D1A',
        'secondary': '#FFEDE0',
        'very-dark-blue': '#1D2025',
        'dark-grayish-blue': '#68707D',
        'grayish-blue': '#B6BCC8',
        'light-grayish-blue': '#F7F8FD',
      },
    },
  },
  plugins: [],
}
