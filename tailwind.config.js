module.exports = {
  content: ["sources/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ibmPlex: ['IBM Plex Sans', 'sans-serif']
      },
      'colors': {
        'brand-pink': '#D13A9C',
        'brand-yellow': '#FFED4F'
      },
      screens: {
        'xs': '350px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1400px',
      }
    },
  },
  plugins: [],
}
