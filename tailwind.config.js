module.exports = {
  content: ["sources/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ibmPlex: ['IBM Plex Sans', 'sans-serif']
      },
      colors: {
        'brand-pink': '#D13A9C',
        'brand-yellow': '#FFED4F',
        'brand-green': '#20A354',
        // Imported
        'grey-1': '#979797',
        'dash-blue': '#F5FFF9',
        'mild-black': '#484747',
        'brand-black': '#222222',
        'black-2': '#4F4F4F',
      },
      screens: {
        'xs': '350px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1400px',
      },
      // Imported
      spacing: {
        7.5: '30px'
      },
      borderRadius: {
        5: '5px',
        10: '10px'
      },
      zIndex: {
        '60': '60'
      },
      fontSize: {
        13: '13px',
        15: '15px'
      },
    },
  },
  plugins: [],
}
