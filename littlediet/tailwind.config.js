/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#F8F5EE',
        footerColor: '#282828',
        footerSociallink: '#FF7019',
        textColorblack: '#2A2827',
        textColorgreen: '#F3812D',
      },
      fontFamily: {
        'paytone': ['Paytone One'],
        'sans-serif': ['sans-serif'],
        'arial': ['Arial'],
        'helvetica': ['Helvetica'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        morph: 'morph 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        morph: {
          '0%': {
            borderRadius: '50%',
            transform: 'scale(1)',
          },
          '50%': {
            borderRadius: '60% 40% 30% 70%',
            transform: 'scale(1.05)',
          },
          '100%': {
            borderRadius: '50%',
            transform: 'scale(1.1)',
          },
        },
      },
    },
  },
  plugins: [],
};
