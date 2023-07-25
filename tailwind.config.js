/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accenthover: "#02519e",
        accent: "#1D5D9B",
      },
    },

    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
