import type { Config } from 'tailwindcss'

const config:Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('src/assets/background.png')"
      }
    },
    fontFamily: {
      sans: "'Archivo', sans-serif",
      heading: "'Andada Pro', serif"
    },
    colors: {
      brand: '#F1A5B1',
      black: '#0B0A0A',
      white: '#FFFFFF'
    }
  },
  plugins: [],
}

export default config