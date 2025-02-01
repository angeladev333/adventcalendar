const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: '#F9FFF1',
        primarygreen: '#458352',
        lightpink: '#FBEAD9',
        whitebeige: '#F6F5E1',
        primarypink: '#FB928E',
        primarydark: '#441752',
        secondarydark: '#A888B5',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
