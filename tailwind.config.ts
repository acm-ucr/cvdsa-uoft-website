/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cvdsa: {
          red: "#F33735",
          "red-100": "#F2918F",
          orange: "#FF754A",
          purple: "#BD99FF",
          cornflower: "#B5CBFD",
        },
      },
    },
  },
  plugins: [],
};
