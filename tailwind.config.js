module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF4D00',
        darkBg: '#1a1a1a',
      },
      fontFamily: {
        body: ['Afacad', 'sans-serif'], // Body text font
      },
    },
  },
  plugins: [],
};
