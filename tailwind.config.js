/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'vv': '400px',
      'vd': '460px', 
      'vs': '540px',
      'sm': '640px',
      'md': '768px',
      // 'ml': '880px',
      'ld': '940px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans1: ['Playfair Display', 'serif'],
      serif: ['Merriweather', 'serif'],
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {
      fontVariantNumeric: {
        default: ['lining-nums'],
      },
    },
  },
  plugins: [],
}

