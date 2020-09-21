function footer() {
  const footer = document.createElement("footer");
  footer.innerHTML =
  `
  <a href="https://github.com/nmccooey" target="_blank" class="copyright">
  Created By: Nicholas McCooey | <i class="fab fa-github"></i>
  </a>
  `;
  
  return footer;
}

export default footer;