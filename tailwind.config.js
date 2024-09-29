/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      filimo: "filimo",
    },
    extend: {
      height: {
        52: "3.25rem",
      },
      lineHeight: {
        52: "3.25rem",
      },
    },
  },
  plugins: [],
};
