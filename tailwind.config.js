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
          DEFAULT: '#F8FAFC',
          warm: '#F1F5F9',
          ivory: '#FFFFFF',
          soft: '#F1F5F9',
          card: '#FFFFFF',
          subtle: '#E2E8F0',
        },
        charcoal: {
          DEFAULT: '#0F172A',
          heading: '#0F172A',
          body: '#334155',
          muted: '#64748B',
          light: '#94A3B8',
          faint: '#CBD5E1',
        },
        navy: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          600: '#2563EB',
          800: '#1E3A5F',
          900: '#0B2046',
          950: '#071530',
        },
        border: {
          subtle: '#F1F5F9',
          DEFAULT: '#E2E8F0',
          strong: '#CBD5E1',
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
        'subtle': '0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.03)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'elevated': '0 20px 40px -12px rgba(15, 23, 42, 0.10), 0 6px 16px -4px rgba(15, 23, 42, 0.04)',
        'float': '0 30px 60px -15px rgba(15, 23, 42, 0.14), 0 10px 24px -5px rgba(15, 23, 42, 0.05)',
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