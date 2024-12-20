/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tesla: ['TESLA', 'sans-serif'],
        space:['space', 'sans-serif'],
        conthrax:['conthrax', 'sans-serif'],
        nasa: ['NASA', 'sans-serif'],
        mont:['Montserrat', 'sans-serif'],
        dune:['dune', 'sans-serif'],
        trench:['Trench', 'sans-serif']
      },
      animation: {
        pulse: "pulse 2s infinite",
      },
    },
  },
  plugins: [],
}