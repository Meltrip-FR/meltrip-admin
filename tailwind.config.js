/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "media",
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        meltrip: {
          primary: "#186E7A",
          secondary: "#CE5729",
          ternary: "#448B7B",
          textW: "#ffffff",
        },
      },
      backgroundImage: {
        travel: "url(/travel.webp)",
      },
      fontFamily: {
        poppins: ["Poppins", "DIN Alternate", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
