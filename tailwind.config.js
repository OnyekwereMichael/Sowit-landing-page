/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xll': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xll': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lgg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mdd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'smm': {'max': '639px'},

      'xsmm': {'max': '400px'},

      'xmm': {'max': '375px'},


      'smi': {'max': '320px'},
      // => @media (max-width: 639px) { ... }
    },

    fontFamily: {
      Urbanist: ' "Urbanist", sans-serif',
      Lato: 'Lato", sans-serif'
    },
    
    extend: {},
  },
  plugins: [],
}

