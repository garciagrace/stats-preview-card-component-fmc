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
    },
    screens: {
      sm: '375px',
      md: '800px',
      lg: '1080px',
    },
  },
  plugins: [],
};
