/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        iconBg: "#3B3B3B",
        blackBg: "#252525",
      },
      dropShadow: {
        addBtnShadow: [
          "-5px 0px 10px rgba(0, 0, 0, 0.40)",
          "0px 5px 10px rgba(0, 0, 0, 0.40)",
        ],
      },
    },
  },
  plugins: [],
};
