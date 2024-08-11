/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EBF7F4",
          100: "#DAF0E9",
          200: "#A7D9C8",
          300: "#7AC2A8",
          400: "#349469",
          500: "#076633",
          600: "#065C2C",
          700: "#044D22",
          800: "#023D18",
          900: "#012E10",
          950: "#011F0A",
        },
      },
      fontFamily: {
        kostic: ["KosticRocGrotesk", "sans-serif"],
        archivo: ["ArchivoBlack", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
