/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#633CFF",
      "light-purple": "#EFEBFF",
      "purple-hover": "#BEADFF",
      "dark-grey": "#333333",
      grey: "#737373",
      "light-grey": "#FAFAFA",
      "border-grey": "#D9D9D9",
      red: "#FF3939",
      white: "#FFFFFF",
      "skelton-grey": "#EEEEEE",
      "error-red": "#723230",
      "loading-blue": "#2c8bd3",
      "success-green": "#03b309",
    },
    fontFamily: {
      "Instrument Sans": ["Instrument Sans"],
    },
    extend: {
      gridTemplateRows: {
        layout: "10% 90%",
      },
    },
    screens: {
      tablet: { max: "768px" },
      mobile: { max: "480px" },
    },
  },
  plugins: [],
};
