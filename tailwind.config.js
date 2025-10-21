/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bege': '#F4E9DB',
        'rosa-terroso': '#DE9892',
        'azul-cinza': '#CED9DF',
        'amarelo': '#FFD166',
        'verde': '#06D6A0',
        'azul': '#118AB2',
        'rosa': '#EF476F',
        'laranja': '#FF9E57',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

