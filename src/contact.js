function contact() {
  const contactContainer = document.createElement("div");
  contactContainer.id = "contact-container";
  contactContainer.innerHTML =
  `
  <h2 class="contact-title">Contact Us </h2>
  <p>Call: (555) - 524 - 8374</p>
  <p>Open Everyday from 11:00AM - 8:00PM</p>
  <div class="social-icons">
    <a class="icon" href="https://github.com/nmccooey" target="_blank"><i class="fab fa-facebook-square"></i></a>
    <a class="icon" href="https://github.com/nmccooey" target="_blank"><i class="fab fa-twitter-square"></i></a>
    <a class="icon" href="https://github.com/nmccooey" target="_blank"><i class="fab fa-instagram-square"></i></a>
  </div>
  `;

  return contactContainer;
}

export default contact;