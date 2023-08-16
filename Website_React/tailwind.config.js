/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'HKGrotesk_Regular'],
        custom: ['CustomFont2', 'Abril Fatface'],
        custom: ['CustomFont3', 'HKGrotesk_Light'],
        transitionDuration: {
          '300': '300ms',
        },
        transitionDelay: {
          '50': '50ms',
        },
      },
    }
  },
  plugins: [],
}