/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FAFAF7',
          warm: '#F4F4EE',
          ivory: '#FDFCFA',
          soft: '#F0EFE8',
          card: '#FFFFFF',
          subtle: '#EAEAE2',
        },
        charcoal: {
          DEFAULT: '#111215',
          heading: '#0B0D11',
          body: '#2D3139',
          muted: '#525866',
          light: '#7B8292',
          faint: '#9CA3AF',
        },
        navy: {
          50: '#F0F5FD',
          100: '#E1EDFB',
          200: '#BFDCF8',
          600: '#1D4ED8',
          800: '#0F2E5C',
          900: '#0B2046',
          950: '#071530',
        },
        border: {
          subtle: '#E7E7DE',
          DEFAULT: '#DFDFD4',
          strong: '#C8C8BA',
        },
        accent: {
          cobalt: '#2563EB',
          navy: '#0B2046',
          amber: '#D97706',
          teal: '#0D9488',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        editorial: ['Manrope', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.02)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02)',
        'elevated': '0 20px 40px -12px rgba(15, 23, 42, 0.08), 0 6px 16px -4px rgba(15, 23, 42, 0.03)',
        'float': '0 30px 60px -15px rgba(15, 23, 42, 0.12), 0 10px 24px -5px rgba(15, 23, 42, 0.04)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
