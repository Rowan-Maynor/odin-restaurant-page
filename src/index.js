import "./styles.css";
import { generateHomePage }  from "./home"
import { generateMenuPage } from "./menu";

addNavButtonAnimation();

function addNavButtonAnimation() {
    const navButton = document.querySelectorAll(".nav-option");
    navButton.forEach(button => {
        button.addEventListener("mouseover", function () {
            button.classList = "nav-option nav-animation";
        }, {once :true});
    });
}

// generateHomePage();
generateMenuPage();