/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'search-bt-bg':"url('/recipe-btn-bg.png')",
        'home-landing-bg':"url('/landing4a.jpg')"
      },
      fontFamily:{
        'heading-cursive':['Rochester' , 'sarif'],
      }
      
    },
  },
  plugins: [],
}