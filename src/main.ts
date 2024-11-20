import Utils from "./utils/main";
// import Codehighlighter from "./components/Codehighlighter";
// import Rendervariant from "./components/Rendervariant";
import Rendercolors from "./components/Rendercolors";
import "./style.css";

window.onload = () => {
  const app = document.querySelector("#app");
  const Colorutils = new Utils();
  const colors = Colorutils.generateColors(100);

  if (app) {
    app.innerHTML += Rendercolors(colors);
  }
};
