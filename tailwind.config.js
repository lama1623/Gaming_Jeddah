/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        "neon-blue": "#5b5fff",
        "neon-purple": "#7b61ff",
        "neon-pink": "#ff4d6d",
      },
    },
  },
  plugins: [],
}
