import { createP, createDiv } from "./library.js"

const content = document.querySelector("#content");

function generateHomePage() {
    createP(content, "append", "home-tag", "", "Come dine in!");
    createP(content, "append", "hours-p", "", "Hours");
    createDiv(content, "append", "hours-table", "grid");
    const hoursTable = document.querySelector("#hours-table");
    createP(hoursTable, "append", "sunday", "", "Day");
    createP(hoursTable, "append", "sunday-hours", "", "Time");
    createP(hoursTable, "append", "monday", "", "Day");
    createP(hoursTable, "append", "monday-hours", "", "Time");

}

export { generateHomePage }