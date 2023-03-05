/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      shrikhand: ['Shrikhand'],
      'patrick-hand': ['Patrick Hand']
    },
    colors: ({ colors }) => ({
      tetrisPurple: {
        100: '#EEECEF',
        200: '#bdb5bf',
        300: '#ada2af',
        400: '#9c909f',
        500: '#6b586f',
        600: '#5b4660',
        700: '#5b4660',
        800: '#3f3143',
        900: '#250e2b'
      },
      tetrisYellow: {
        100: '#e2c974',
        200: '#e2c974',
        300: '#e2c974',
        400: '#e2c974',
        500: '#e2c974',
        600: '#e2c974',
        700: '#e2c974',
        800: '#e2c974',
        900: '#e2c974'
      }
    })
  },
  plugins: []
};
