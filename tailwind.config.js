/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        danger: '#C9353F',
        destructive: '#C9353F',
        success: '#00A870',
        warning: {
          DEFAULT: '#FFB800',
          50: '#FFFDF5',
          100: '#FFF9E0',
          200: '#FFF2B1',
          300: '#FFE982',
          400: '#FFD83D',
          500: '#FFB800',
          600: '#CC9400',
          700: '#996F00',
          800: '#664B00',
          900: '#332600'
        },
        neutral: {
          25: '#FAFAFA',
          50: '#F3F3F3',
          75: 'var(--color-neutral-75)',
          100: 'var(--color-neutral-100)',
          200: '#B6B8B7',
          300: '#ABAEB5'
        },
        primary: {
          DEFAULT: '#18978f',
          50: '#f7fcfb',
          100: '#e7f6f2',
          200: '#c7ebe1',
          300: '#82D3C1',
          400: '#12a594',
          500: '#18978f',
          600: '#006b70',
          700: '#003742',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
        },
        background: {
          DEFAULT: 'hsl(var(--background) / <alpha-value>)'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-animate')]
}
