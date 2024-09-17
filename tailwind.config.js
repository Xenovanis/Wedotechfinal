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
            passionOne: ['"Passion One"', 'sans-serif']
            
          },
          colors: {
            'gray-700': '#36494D'
          },
          filter: {
            'brightness-50': 'brightness(50%)',
            'brightness-75': 'brightness(75%)',
            'brightness-100': 'brightness(100%)'
          },
          spacing:{
            'navbar-padding': '40px',
            'logo-width': '128px',
            'menu-width': '32px',
            '50': '50px',
            '100': '120px',
            '130': '180px',
            '20': '20PX',
            '2000': '1190PX',
            '200': '950PX',
            '3000':'-105px'
          },
    lineHeight: {
      'snug': '1'
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
      'extrasemihuge': '120.5px;',
      'midhuge': '54.5px;',
      'gargantuan': '4rem',
    },
    fontFamily: {
      passion: ['"Passion One"', 'sans-serif'],
    },
    colors: {
      'custom-gray': '#36494D',
      'custom-darkgreen' : '#36494D',
      'creamy' : '#F8F8EA',
        'whatwedo_color':'#789D89',
        'contactcolor':'#FFC403',
        'alert':'#FB9A6D'

    },
    lineHeight: {
      'snug': '1'
    },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    require('@tailwindcss/forms'),
  ],
}




