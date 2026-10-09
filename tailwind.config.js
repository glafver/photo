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
          50: '#faf2f4',
          100: '#f4e0e5',
          200: '#e9c4cd',
          300: '#d99fad',
          400: '#c57388',
          500: '#ad4d68',
          600: '#94354f',
          700: '#7a2a41',
          800: '#5f2134',
          900: '#4a1a29',
        },
        greige: {
          50: '#f8f6f2',
          100: '#ede9e0',
          200: '#e0dad0',
          300: '#cfc7ba',
        },
      },
    },
  },
  plugins: [],
};
