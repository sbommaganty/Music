/*
Student Name: Meet Ashokbhai Upadhyay
File Name: C10 lab1
Date: 04 / 12 / 2023
*/

/* Hamburger menu function. */
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
