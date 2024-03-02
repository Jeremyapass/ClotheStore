/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'opener' : "url('/src/Gambar/opener.jpg')"
      }
    },
  },
  plugins: [],
}
