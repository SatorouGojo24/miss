/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4F46E5', 
          secondary: '#06B6D4', 
          dark: '#1E293B',     
          light: '#F8FAFC'   
        }
      }
    },
  },
  plugins: [],
}