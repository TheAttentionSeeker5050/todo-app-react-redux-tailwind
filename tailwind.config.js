/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': {"max":'600px'},
      // => @media (min-width: 640px) { ... }

      'tablet': {"max":'1024px'},
      // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
