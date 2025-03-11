/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
        castellar: ["Castellar", "serif"],
        roboto: ["Roboto", "serif"],
        montserrat: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
