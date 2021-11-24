const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Monserat', 'serif'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': {fontSize: theme('fontSize.2xl')},
        'h2': {fontSize: theme('fontSize.xl')},
        'h3': {fontSize: theme('fontSize.lg')},
        'h4': {fontSize: theme('fontSize.md')},
        'h5': {fontSize: theme('fontSize.sm')},
        'h6': {fontSize: theme('fontSize.xs ')},
      })
    })
  ],
}
