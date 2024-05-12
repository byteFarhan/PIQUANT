/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "shadows-into-light": "'Shadows Into Light', cursive",
        "roboto-slab": "'Roboto Slab', serif",
        oswald: "'Oswald', sans-serif",
      },
      colors: {
        primary: "#ffd71b",
        secondary: "#111111",
        natural: "#707070",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
