/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        68: "4.5rem",
      },
      lineHeight: {
        68: "4.5rem",
      },
    },
  },
  plugins: [],
};
