/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {

      container:{
        center:true,
        padding:{
         DEFAULT:"1rem",
         md:'5rem'
        },
      },
     fontFamily:{
      "Yekan":"Yekan",
      "YekanMedium":"Yekan Medium",
      "YekanHeavy":"Yekan Heavy",
       "YekanRegular":"Yekan Regular",
     }
    },
  },
  plugins: [],
}

