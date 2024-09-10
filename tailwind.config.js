/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    spacing:{
      'navbar-padding': '40px',
      'logo-width': '128px',
      'menu-width': '32px',
    },
    padding: {
      '20px': '20px',
      '70px': '70px',
      '50px': '50px',
    },
    },
  },
  plugins: [],
}
