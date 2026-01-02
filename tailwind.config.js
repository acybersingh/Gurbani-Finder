/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        navy: '#000080',
        gold: '#FFD700',
      },
      fontFamily: {
        gurmukhi: ['SantLipi'],
      },
    },
  },
  plugins: [],
}
