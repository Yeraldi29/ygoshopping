/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#273849',
        'neutral-gray': '#b3b7bd',
        'trustworthy-blue': '#4e6e83',
        'sucess-green': '#28a745',
        'vibrant-cyan': '#45c1cc',
        'warm-orange': '#f5a623',
        'soft-white': '#fcfdfd',
        'subtle-beige': '#f9f6f2',
      },
      fontFamily: {
        moderustic: ['Moderustic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

