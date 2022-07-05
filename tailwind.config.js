module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        "2": "2 2 0%"
      },
      maxWidth: {
        "8xl": "1920px"
      },
      colors: {
        "main": "#73ABC7",
        "hover": "#A2C8D0",
        "dark": "#2F2F60",
        "light": "#D6E7EA",
        "error": "#FF9999"
      }
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
}