import { createP, createDiv } from "./library.js"

const content = document.querySelector("#content");

function generateHomePage() {
    createP(content, "append", "home-tag", "", "Come dine in!");
    createP(content, "append", "hours-p", "", "Hours");
    createDiv(content, "append", "hours-table", "grid-container");
    const hoursTable = document.querySelector("#hours-table");
    createP(hoursTable, "append", "sunday", "hours-entry", "Sunday");
    createP(hoursTable, "append", "sunday-hours", "hours-entry", "Time");
    createP(hoursTable, "append", "monday", "hours-entry", "Monday");
    createP(hoursTable, "append", "monday-hours", "hours-entry", "Time");

}

export { generateHomePage }