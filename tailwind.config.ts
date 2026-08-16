import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#060816',
        panel: '#0d1222',
        card: '#111827',
        neon: '#7c3aed',
        cyan: '#60a5fa',
        mint: '#7dd3fc',
        soft: '#dbeafe',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(96, 165, 250, 0.25), 0 20px 80px rgba(124, 58, 237, 0.22)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.16) 1px, transparent 0)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'rise-up': 'riseUp 0.75s ease-out both',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        riseUp: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.04)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
