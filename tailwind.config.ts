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
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
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