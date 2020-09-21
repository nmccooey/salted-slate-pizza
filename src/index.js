import './assets/css/style.css';
import initial from "./modules/initial";
import home from "./modules/home";
import menu from "./modules/menu";
import about from "./modules/about";
import contact from "./modules/contact";

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