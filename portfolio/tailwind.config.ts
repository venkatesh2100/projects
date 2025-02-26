import type { Config } from 'tailwindcss';
// import svgToDataUri from 'mini-svg-data-uri';
// import colors from 'tailwindcss/colors';
// import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    //Extends the Themes
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      colors: {
        text: 'var(--cal-text)',
        text2: 'var(--cal-text2)',
        footer: 'var(--cal-footer)',
      },
      cursor: {
        boy: "url('/win-1.cur'), auto",
        win2: "url('/win-2.cur'), auto",
        rock: "url('/Rocket Pointer.png'), auto",
      },
    },
  },
  plugins: [
    // addVariablesForColors,
    // function ({ matchUtilities, theme }) {
    //   matchUtilities(
    //     {
    //       'bg-grid': (value) => ({
    //         backgroundImage: `url("${svgToDataUri(
    //           `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='${value}'><path d='M0 .5H31.5V32'/></svg>`
    //         )}")`,
    //       }),
    //       'bg-grid-small': (value) => ({
    //         backgroundImage: `url("${svgToDataUri(
    //           `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='8' height='8' fill='none' stroke='${value}'><path d='M0 .5H31.5V32'/></svg>`
    //         )}")`,
    //       }),
    //       'bg-dot': (value) => ({
    //         backgroundImage: `url("${svgToDataUri(
    //           `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'><circle fill='${value}' cx='10' cy='10' r='1.6257413380501518'/></svg>`
    //         )}")`,
    //       }),
    //     },
    //     {
    //       values: flattenColorPalette(theme('backgroundColor')),
    //       type: 'color',
    //     }
    //   );
    // },
  ],
};

// function addVariablesForColors({ addBase, theme }:any) {
//   const allColors = flattenColorPalette(theme('colors'));
//   const newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );
//   addBase({ ':root': newVars });
// }

export default config;
