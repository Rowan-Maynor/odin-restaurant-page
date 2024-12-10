import "./styles.css";
import { createBtn } from "./library";

const nav = document.querySelector("nav");

createBtn(nav, "append", "nav-home", "nav-option", "Home");
createBtn(nav, "append", "nav-menu", "nav-option", "Menu");
createBtn(nav, "append", "nav-about-us", "nav-option", "About Us");