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
          'about': ['white 75.2%', '#2F2F2F 75.2%'],
          'cover': ['#2F2F2F 65%', 'white 65%'],
        }
      }
    },
    screens: {
      'sm': {'max': '767px'},
      'md': {'min': '768px', 'max': '991px'},
      'lg': {'min': '992px', 'max': '1199px'},
      'xl': {'min': '1200px'},
      'small': {'max': '991px'},
      'big': {'min': '992px'},
      'tablet': {'max': '590px'},
      'bigTablet': {'max': '676px'},
      'mobile': {'max': '390px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}