import './style.css';
import initial from "./initial.js";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import contact from "./contact.js";

// Append fragment to DOM.
document.body.appendChild(initial());

// Add event listener for company logo.
const companyLogo = document.querySelector(".company-logo");
companyLogo.addEventListener("click", function(){
  loadTab(home);
})

// Add event listeners for each tab.
const tabs = document.querySelectorAll(".tab");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function(event) {
    let tab = event.target.getAttribute("data-index");
    switch (tab) {
      case "home":
        loadTab(home);
        break;
      case "menu":
        loadTab(menu);
        break;
      case "about":
        loadTab(about);
        break;
      case "contact":
        loadTab(contact);
        break;
    }
  });
}

function loadTab(loadTabCallback) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.appendChild(loadTabCallback());
}