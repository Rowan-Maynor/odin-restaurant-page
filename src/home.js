import { createP, createDiv } from "./library.js"

const content = document.querySelector("#content");

function generateHomePage() {
    createP(content, "append", "home-tag", "", "Come dine in!");
    createP(content, "append", "hours-p", "", "Hours");
    createDiv(content, "append", "hours-table", "grid");
}

export { generateHomePage }