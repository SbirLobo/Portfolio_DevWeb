/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["playfair, montserrat, sans-serif"],
        montserrat: ["montserrat, playfair, sans-serif"],
      },
    },
    colors: {
      primary: "#020F23",
      secondary: "#FAF9F0",
      tertiary: "#E9C46A",
    },
  },
  plugins: [],
};
