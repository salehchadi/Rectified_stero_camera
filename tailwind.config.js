/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slateBg: '#0F172A',
        slateSurface: '#1E293B',
        slateBorder: '#334155',
        neonCyan: '#22D3EE',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-slate': 'linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-40': '40px 40px',
      }
    },
  },
  plugins: [],
}
