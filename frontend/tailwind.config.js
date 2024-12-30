/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-landing-bg':"url('/landing4a.jpg')"
      },
      fontFamily:{
        'heading-cursive':['Rochester' , 'sarif'],
      }
      
    },
  },
  plugins: [],
}