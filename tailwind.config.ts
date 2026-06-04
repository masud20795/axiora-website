import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        primary: '#00FF88',
        secondary: '#7B61FF',
        surface: '#111111',
        border: '#1A1A1A',
        muted: '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00FF88 0%, #7B61FF 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(0, 255, 136, 0.15) 0%, transparent 70%)',
        'gradient-purple-glow': 'radial-gradient(ellipse at center, rgba(123, 97, 255, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 255, 136, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
