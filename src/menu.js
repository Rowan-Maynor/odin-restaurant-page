import { createP, createDiv, createImg } from "./library.js"

const content = document.querySelector("#content");

function generateMenuPage() {
    //menu title
    createP(content, "append", "menu-title", "", "Menu");

    //create container for menu items
    createDiv(content, "append", "menu-container", "flex-container");
    const menuContainer = document.querySelector("#menu-container");

    createMenuItem(menuContainer,
         "https://images.unsplash.com/photo-1626920370508-cf4d8f916448?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         "menu-item-1");
}

function createMenuItem(parent, src, id) {
    createImg(src, parent, "append", `${id}-img`, "menu-img");
}

export { generateMenuPage }