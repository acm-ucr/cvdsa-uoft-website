/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cvdsa: {
          "red-100": "#F2918F",
          "red-200": "#F33734",
          "blue-100": "#B5CBFD",
          "orange-100": "#FF754A",
          "purple-100": "#BC99FF",
          "cornflower-100": "#B5CBFD",
        },
      },
    },
  },
  plugins: [],
};
