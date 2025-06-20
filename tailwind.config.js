/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is important
  ],
  theme: {
    extend: {
      colors: {
        'cyan': {
          '300': '#67e8f9',
          '400': '#22d3ee',
          '500': '#06b6d4',
        }
      }
    },
  },
  plugins: [],
}
