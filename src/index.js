import "./styles.css";
import { createA } from "./library";

const nav = document.querySelector("nav");

createA("", nav, "append", "nav-home", "nav-option", "Home");
createA("", nav, "append", "nav-menu", "nav-option", "Menu");
createA("", nav, "append", "nav-about-us", "nav-option", "About Us");