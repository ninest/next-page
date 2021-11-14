module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        xs: `${2 * 0.25}em`,
        sm: `${3 * 0.25}em`,
        base: `${4 * 0.25}em`,
        md: `${5 * 0.25}em`,
        lg: `${7 * 0.25}em`,
        xl: `${9 * 0.25}em`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
