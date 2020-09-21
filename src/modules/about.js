function about() {
  const aboutContainer = document.createElement("div");
  aboutContainer.id= "about-container";
  aboutContainer.innerHTML =
  `
  <h2 class="about-title">About Us </h2>
  <p class="about-description">Salted Slate Pizza was established in 1969 and has served millions of slices of pizza. We are located in Providence, RI.</p>
  `;

  return aboutContainer;
}

export default about;