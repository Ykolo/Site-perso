/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./Accueil.html",
    "./public/html/Archon.html",
    "./public/html/Venti.html",
    "./public/html/Zhongli.html",
    "./public/html/Nahida.html",
    "./public/html/Furina.html",
    "./public/html/Raiden.html",
    "./public/html/Tsarista.html",
    "./public/html/Murata.html",
    "./public/html/formulaire.html",
    "./src/**/*.{html,js}",
  ],
  darkMode:"class", // or "media" or "class
  theme: {
    extend: {
      colors: {
        pyro: "#b1262a",
        hydro: "#248fbd",
        anemo: "#299c8e",
        electro: "#7554bf",
        dendro: "#6eac23",
        cryo: "#7aa5da",
        geo: "#dea85c",
      },
    },
  },
  plugins: [],
};
