import { createP, createDiv } from "./library.js"

const content = document.querySelector("#content");

function generateHomePage() {
    createP(content, "append", "home-tag", "", "Come dine in!");
    createP(content, "append", "address", "", "- 123 Real Address Rd, Atlanta, GA -");
    createP(content, "append", "hours-p", "", "Hours");
    createDiv(content, "append", "hours-table", "grid-container");
    const hoursTable = document.querySelector("#hours-table");
    createP(hoursTable, "append", "sunday", "hours-entry", "Sunday");
    createP(hoursTable, "append", "sunday-hours", "hours-entry", "Closed");
    createP(hoursTable, "append", "monday", "hours-entry", "Monday");
    createP(hoursTable, "append", "monday-hours", "hours-entry", "9:00AM - 5:00PM");
    createP(hoursTable, "append", "tuesday", "hours-entry", "Tuesday");
    createP(hoursTable, "append", "tuesday-hours", "hours-entry", "9:00AM - 5:00PM");
    createP(hoursTable, "append", "wednesday", "hours-entry", "Wednesday");
    createP(hoursTable, "append", "wednesday-hours", "hours-entry", "9:00AM - 5:00PM");
    createP(hoursTable, "append", "thursday", "hours-entry", "Thursday");
    createP(hoursTable, "append", "tursday-hours", "hours-entry", "9:00AM - 5:00PM");
    createP(hoursTable, "append", "friday", "hours-entry", "Friday");
    createP(hoursTable, "append", "friday-hours", "hours-entry", "9:00AM - 5:00PM");
    createP(hoursTable, "append", "saturday", "hours-entry", "Saturday");
    createP(hoursTable, "append", "saturday-hours", "hours-entry", "Closed");
}

export { generateHomePage }