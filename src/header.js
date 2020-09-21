function header() {
  const header = document.createElement("header");
  
  // Company Logo
  const companyLogo = document.createElement("div");
  companyLogo.classList.add("company-logo");
  companyLogo.innerHTML = `Salted Slate Pizza &nbsp;<i class="fas fa-pizza-slice"></i>`;
  header.appendChild(companyLogo);

  // Tabs
  const ul = document.createElement("ul");
  ul.innerHTML = `
  <li class="tab" data-index="home">Home</li>
  <li class="tab" data-index="menu">Menu</li>
  <li class="tab" data-index="about">About</li>
  <li class="tab" data-index="contact">Contact</li>
  `;
  header.appendChild(ul);

  return header;
}

export default header;