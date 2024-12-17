import { createP } from "./library.js"

const content = document.querySelector("#content");

function generateHomePage() {
    createP(content, "append", "home-tag", "", "Come dine in!");
}

export { generateHomePage }