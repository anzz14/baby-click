/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'baby-pink': '#FFB6C1',
        'baby-blue': '#87CEEB',
        'baby-yellow': '#FFFF99',
        'baby-purple': '#DDA0DD',
        'baby-green': '#98FB98',
      },
      fontFamily: {
        'comic': ['Comic Sans MS', 'cursive'],
      },
      animation: {
        'bounce-gentle': 'bounce 0.5s ease-in-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
