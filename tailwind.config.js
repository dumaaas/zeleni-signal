module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { //custom colors
        gradient: {
          'about': ['white 1240px', '#2F2F2F 1240px'],
          'cover': ['#2F2F2F 65%', 'white 65%'],
        }
      }
    },
    screens: {
      'sm': {
        'max': '767px'
      },
      'md': {
        'min': '768px',
        'max': '991px'
      },
      'lg': {
        'min': '992px',
        'max': '1199px'
      },
      'xl': {
        'min': '1200px'
      },

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],

}