import type { Config } from 'tailwindcss'

const config:Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/background.png')"
      },
      fontSize: {
        '3xl': ['40px', '44px'],
        '6xl': ['64px', '70.4px'],
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-5%)'
          },
        }
      },
      animation: {
        float: 'float 2s ease-in-out infinite'
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