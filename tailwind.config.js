/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a2332',
        'darker-bg': '#0f1e36',
        'wine': '#8B3A3A',
        'wine-light': '#A0534F',
        'wine-dark': '#722f37',
      },
    },
  },
  plugins: [],
}
