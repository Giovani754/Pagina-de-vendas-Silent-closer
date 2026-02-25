/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        offwhite: '#F2F2F2',
        chrome: '#C0C0C0',
        metal: '#8A8A8A',
        carbon: '#1A1A1A',
        graphite: '#2A2A2A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
