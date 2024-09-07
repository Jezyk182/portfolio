/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // BG IMAGE
      },
      colors: {
        bgMain: "#09090b",
      },
      borderRadius: {
        blob: "34% 48% 45% 33% / 35% 25% 24% 50%;"
      }
    },
  },
  plugins: [],
}

