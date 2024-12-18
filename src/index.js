import "./styles.css";
import { generateHomePage }  from "./home"
import { generateMenuPage } from "./menu";

const homeTab = document.querySelector("#nav-home");
const menuTab = document.querySelector("#nav-menu");
const aboutUsTab = document.querySelector("#nav-about-us");

addNavButtonAnimation();
generateHomePage();

function addNavButtonAnimation() {
    const navButton = document.querySelectorAll(".nav-option");
    navButton.forEach(button => {
        button.addEventListener("mouseover", function () {
            button.classList = "nav-option nav-animation";
        }, {once :true});
    });
}

homeTab.addEventListener("click", generateHomePage);
menuTab.addEventListener("click", generateMenuPage);