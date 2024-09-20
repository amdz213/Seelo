/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        herocolor:"#E5F9F4",
        articlescolor:"#F7FEFC",  
        bgcolor:"#beeddd",
        aboutbg:"#F7F7F7",
        boxcolor:"#F8F8F8A6",
        netroBox:"#F7FEFC"
      }
    },
  },
  plugins: [],
}

