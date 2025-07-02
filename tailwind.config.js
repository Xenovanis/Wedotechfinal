/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
      },
      fontFamily: {
        passion: ['"Passion One"', 'sans-serif'],
        caveat: ['"Caveat Brush"', 'cursive'],
      },
      colors: {
        'gray-700': '#36494D',
        'custom-gray': '#36494D',
        'custom-darkgreen': '#36494D',
        'creamy': '#F8F8EA',
        'whatwedo_color': '#789D89',
        'contactcolor': '#FFC403',
        'alert': '#FB9A6D',
      },
      filter: {
        'brightness-50': 'brightness(0.5)',
        'brightness-75': 'brightness(0.75)',
        'brightness-100': 'brightness(1)',
      },
      spacing: {
        'navbar-padding': '40px',
        'logo-width': '128px',
        'menu-width': '32px',
        '50': '50px',
        '100': '120px',
        '130': '180px',
        '20': '20px',
        '2000': '1190px',
        '250': '950px',
        '3000': '-105px',
        '300': '-100px',
        '200': '-75px',
        '400': '-400px',
      },
      lineHeight: {
        snug: '1',
      },
      padding: {
        '20px': '20px',
        '70px': '70px',
        '50px': '50px',
      },
      fontSize: {
        'xxs': '10px',
        'extrasmall': '50px',
        'tiny': '100px',
        'tiny2': '130px',
        'extratiny': '150px',
        'huge': '174.5px',
        'semihuge': '94.5px',
        'extrasemihuge': '120.5px',
        'midhuge': '54.5px',
        'gargantuan': '4rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    require('@tailwindcss/forms'),
  ],
}
