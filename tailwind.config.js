const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ash: "#E5E5E5",
        violet: "#1B1049",
        yellow: "#FFBE0C",
        pink: "#FF006E",
        lightBlue: "#49CAE4",
        textColor: "#1B1049B2",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
