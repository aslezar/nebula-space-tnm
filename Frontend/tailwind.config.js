/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        teal: {
          '600': '#019B98',
          // You can also update other shades if needed
        },
      },
    },
  },
  plugins: [],
};