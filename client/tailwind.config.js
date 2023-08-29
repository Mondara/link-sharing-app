/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#633CFF",
      "light-purple": "#EFEBFF",
      "purple-hover": "#BEADFF",
      "dark-grey": "#333333",
      gray: "#737373",
      "light-gray": "#FAFAFA",
      "border-gray": "#D9D9D9",
      red: "#FF3939",
      white: "#FFFFFF",
    },
    fontFamily: {
      "Instrument Sans": ["Instrument Sans"],
    },
    extend: {
      gridTemplateRows: {
        layout: "10% 90%",
      },
    },
  },
  plugins: [],
};
