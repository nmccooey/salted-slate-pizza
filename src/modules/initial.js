import header from "./header.js";
import home from "./home.js";
import footer from "./footer.js";

function initial() {
  let fragment = document.createDocumentFragment();

  // HEADER
  fragment.appendChild(header());

  // MAIN
  const main = document.createElement("main");
  main.appendChild(home());
  fragment.appendChild(main);

  // FOOTER
  fragment.appendChild(footer());

  return fragment;
}

export default initial;