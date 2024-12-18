import { createP, createDiv } from "./library.js"

const content = document.querySelector("#content");

function generateMenuPage() {
    createP(content, "append", "menu-title", "", "Menu")
}

export { generateMenuPage }