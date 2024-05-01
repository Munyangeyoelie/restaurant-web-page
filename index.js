import "./style.css";

import { HomePageHTML } from "./pages/HomePage";
import { AboutPageHTML } from "./pages/AboutPage";
import { MenuPageHTML } from "./pages/MenuPage";
import {
  HomePageListener,
  AboutPageListener,
  MenuPageListener,
} from "./functionality/EventListeners";

// import AboutPage from './pages/HomePage';
// import MenuPage from './pages/HomePage';

const content = document.querySelector("#content");
const nav = document.querySelector("nav");

const defaultHomePage = HomePageHTML();
const defaultMenuPage = MenuPageHTML()[0];
const defaultAboutPage = AboutPageHTML()[0];

content.insertAdjacentHTML("afterbegin", HomePageHTML());

nav.addEventListener("click", function (e) {
  const textContent = e.target.textContent;

  if (textContent == "Home") {
    HomePageListener(defaultHomePage, content);
    content.classList.remove("about");
  } else if (textContent == "Menu") {
    content.classList.remove("about");
    MenuPageListener(defaultMenuPage, content);
  } else if (textContent == "About") {
    AboutPageListener(defaultAboutPage, content);
    content.classList.add("about");
  }
});
