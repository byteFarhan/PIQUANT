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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
