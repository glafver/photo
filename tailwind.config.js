/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['var(--font-lexend)', 'Lexend', 'sans-serif'],
        cuba: ['Playwrite CU', 'cursive']
      },
      colors: {
        brand: {
          50: '#fcf9f6',
          100: '#f7eee7',
          200: '#efdccd',
          300: '#e4c3ae',
          400: '#d6a88c',
          500: '#c8906f',
          600: '#af7759',
          700: '#8e5f47',
          800: '#714c39',
          900: '#593b2d',
        },
        pastel: {
          cream: '#f6efe4',
          sand: '#e9ddc6',
          peach: '#f3c6a0',
          blush: '#edb3be',
          sage: '#c5d2b7',
          sky: '#b6d0de',
          lavender: '#d0c0dd',
        },
      },
    },
  },
  plugins: [],
};
