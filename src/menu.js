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
         "menu-item-1",
        "Sandwich", "$14.00", 
        "An eggs and bacon sandwich on a corrisant bun. Contains dairy products."
    );

    createMenuItem(menuContainer,
        "https://images.unsplash.com/photo-1632599148108-57848660f3af?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "menu-item-2",
        "Coffee", "$5.00",
        "Choose from our many different styles of brews! Price may vary based on any extra addatives. Ask in store for available options, including our cup of the day!"
    );
}

function createMenuItem(parent, src, id, name, price, description) {
    //creates container for the menu item
    createDiv(parent, "append", `${id}-container`,
         "flex-container menu-item-container");
    const menuItemContainer = document.querySelector(`#${id}-container`);
    
    //adds image to the menu item
    createImg(src, menuItemContainer, "append", `${id}-img`, "menu-img");

    //creates a div to contain the two text boxes
    createDiv(menuItemContainer, "append", `${id}-text-container`,
         "flex-container menu-text-container");
    const menuTextContainer = document.querySelector(`#${id}-text-container`);

    //creates a container for the name and price
    createDiv(menuTextContainer, "append", `${id}-name-container`,
         "flex-container menu-name-container");
    const menuNameContainer = document.querySelector(`#${id}-name-container`);
    
    //create both P elements for the name and price
    //these are shown in the same box
    createP(menuNameContainer, "append", `${id}-name`, "menu-name", name);
    createP(menuNameContainer, "append", `${id}-price`, "menu-price", price);
    
    //create the final section for details, this is below the name
    createP(menuTextContainer, "append", `${id}-details`,
        "flex-container menu-details", description);
}

export { generateMenuPage }