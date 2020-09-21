function home() {
  const homeContainer = document.createElement("div");
  homeContainer.id = "home-container";
  homeContainer.innerHTML =
  `
  <h2 class="home-title">Fresh Brick Oven Pizza</h2>
  <p>Over 50 years of award winning pizza.</p>
  `;

  return homeContainer;
}

export default home;