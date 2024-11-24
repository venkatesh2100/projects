/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backgroundColor: '#F8F5EE'
      },
      fontFamily: {
        'paytone': ['Paytone One', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

