/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        "2xl": "4rem",
      },
    },
    extend: {
      colors: {
        white: "#F7F7F7",
        brand: {
          100: "hsl(15, 100%, 92%)",
          200: "hsl(23, 100%, 80%)",
          300: "hsl(23, 100%, 70%)",
          400: "hsl(23, 100%, 60%)",
          DEFAULT: "hsl(23, 100%, 50%)",
          600: "hsl(23, 100%, 40%)",
          700: "hsl(23, 100%, 30%)",
          800: "hsl(23, 100%, 20%)",
          900: "hsl(23, 100%, 10%)",
        },
        dark: {
          100: "hsl(229, 21%, 27%)",
          200: "hsl(229, 21%, 24%)",
          300: "hsl(229, 21%, 21%)",
          400: "hsl(229, 21%, 18%)",
          DEFAULT: "hsl(229, 21%, 15%)",
          600: "hsl(229, 21%, 12%)",
          700: "hsl(229, 21%, 9%)",
          800: "hsl(229, 21%, 6%)",
          900: "hsl(229, 21%, 3%)",
        },
        lightPink: "hsl(0, 100%, 96%)",
      },
    },
  },
  plugins: [],
};
