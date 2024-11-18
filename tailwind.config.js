/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    "animate__animated",
    "animate__bounce",
    "animate__delay-2s",
    "animate__infinite",
    "animate__fadeIn", 
  ],
  plugins: [require('daisyui')],
}
