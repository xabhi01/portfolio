/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        bg: '#080C10',
        surface: '#0D1117',
        card: '#111820',
        accent: '#00FFA3',
        accent2: '#0085FF',
        muted: '#4A5568',
        text: '#E2E8F0',
      },
    },
  },
  plugins: [],
}
