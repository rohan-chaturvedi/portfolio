/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'heading-xl': ['88px', {
        lineHeight: '88px',
        letterSpacing: '-2.5px',
      }],
      'heading-l': ['48px', {
        lineHeight: '56px',
        letterSpacing: '-1.5px',
        fontWeight: '700',
      }],
      'heading-m': ['24px', {
        lineHeight: '32px',
        letterSpacing: '0',
        fontWeight: '700',
      }],
      'body-m': ['18px', {
        lineHeight: '28px',
        letterSpacing: '-0.02em',
      }],
      'heading-logo': ['32px', {
        lineHeight: '32px',
        letterSpacing: '0.244px',
        fontWeight: '700',
      }],
    },
    fontFamily: {
      sans: ['var(--font-space_grotesk)']
    },
    extend: {
      colors: {
        'primary-green': '#4ee1a0',
        'secondary-dark': '#151515',
        'primary-gray': '#242424',
        'primary-lightgray': '#D9D9D9',
        'white': "#ffffff"
      }
    },
  },
  plugins: [],
}
