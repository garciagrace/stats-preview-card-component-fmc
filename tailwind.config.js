module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexendDeca: ['Lexend Deca', 'sans-serif'],
      },
      colors: {
        // Primary
        veryDarkBlue: 'hsl(233, 47%, 7%)',
        darkDesaturatedBlue: 'hsl(244, 38%, 16%)',
        softViolet: 'hsl(277, 64%, 61%)',

        // Neutral
        offWhite: 'hsla(0, 0%, 100%, 0.75)',
        offWhiteSlight: 'hsla(0, 0%, 100%, 0.6)',
      },
      backgroundImage: {
        mobile:
          'linear-gradient(to right, hsla(277, 64%, 50%, 0.6), hsla(277, 64%, 50%, 0.6)), url("../images/image-header-mobile.jpg")',
        desktop:
          'linear-gradient(to right, hsla(277, 64%, 50%, 0.6), hsla(277, 64%, 50%, 0.6)), url("../images/image-header-desktop.jpg")',
      },
    },
    screens: {
      sm: '320px',
      md: '600px',
      lg: '976px',
    },
  },
  plugins: [],
};
