/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f1f5fb',
          100: '#d9e1f0',
          200: '#b6c2d9',
          300: '#8d9bbb',
          400: '#65779b',
          500: '#4a5c80',
          600: '#2a3a5e',
          700: '#1c2a48',
          800: '#121d36',
          900: '#0a1224',
          950: '#050914',
        },
        electric: {
          50: '#eaf4ff',
          100: '#d1e7ff',
          200: '#a6d0ff',
          300: '#6fb4ff',
          400: '#3d9bff',
          500: '#2a84f0',
          600: '#1b6fe0',
          700: '#1758b5',
          800: '#154a92',
          900: '#103a72',
        },
        success: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        warning: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        error: {
          400: '#f87171',
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(61, 155, 255, 0.35), 0 0 32px -6px rgba(42, 132, 240, 0.45)',
        'glow-soft': '0 0 40px -10px rgba(42, 132, 240, 0.55)',
      },
    },
  },
  plugins: [],
};
