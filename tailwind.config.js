/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, black 35%, white 73%)',
        'purple-500': '#7e5bef',
        'pink-500': '#ec4899',
      },
      colors: {
        'salmon': '#FA8072',
        'medium-purple': '#9370DB', 
        'white': '#FFFFFF', 
        'purple-500': '#7e5bef',
        'pink-500': '#ec4899',
      },
    },
  },
  plugins: [],
}
