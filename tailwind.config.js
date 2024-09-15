/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
          fontFamily: {
            passionOne: ['"Passion One"', 'sans-serif']
          },
          colors: {
            'gray-700': '#36494D',
          },
          filter: {
            'brightness-50': 'brightness(50%)',
            'brightness-75': 'brightness(75%)',
            'brightness-100': 'brightness(100%)',
          },
    spacing:{
      'navbar-padding': '40px',
      'logo-width': '128px',
      'menu-width': '32px',
      '50': '50px',
      '500': '-50px',
      '100': '120px',
      '20': '20PX',
      '300': '-100PX',
      '200': '-75PX',
      '400' : '-400px'
    },
    padding: {
      '20px': '20px',
      '70px': '70px',
      '50px': '50px',
    },
    fontSize: {
      'xxs': '10px', 
      'extrasmall':'50px',
      'tiny': '100px', 
      'tiny2': '130px',
      'extratiny': '150px', 
      'huge': '174.5px;', 
      'semihuge': '94.5px;', 
      'midhuge': '54.5px;',
      'gargantuan': '4rem', 
    },
    fontFamily: {
      passion: ['"Passion One"', 'sans-serif'],
    },
    colors: {
      'custom-gray': '#36494D',
      'custom-darkgreen' : '#36494D',
      'creamy' : '#F8F8EA'
    },
    lineHeight: {
      'snug': '1'
    },
    },
  },
  plugins: [],
}
