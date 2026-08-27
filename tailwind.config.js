/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#059669',
          'green-light': '#10B981',
          'green-dark': '#047857',
          'green-bg': '#ECFDF5',
          navy: '#0b192e',
          'navy-dark': '#060f1e',
          'navy-card': '#132238',
          'navy-text': '#0f172a',
          'navy-btn': '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
        'card-hover': '0 20px 30px -10px rgba(0, 0, 0, 0.08), 0 10px 15px -5px rgba(0, 0, 0, 0.04)',
        'floating': '0 20px 35px -5px rgba(0, 0, 0, 0.25), 0 10px 15px -5px rgba(0, 0, 0, 0.1)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.35)',
      },
    },
  },
  plugins: [],
}
