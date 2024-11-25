/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backgroundColor: '#F8F5EE',
        footerColor: '#282828',
        footerSociallink: '#FF7019',
        textColorblack: '#2A2827',
        textColorgreen: '#F3812D'
      },
      fontFamily: {
        'paytone': ['Paytone One', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

