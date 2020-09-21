function menu() {
  const menuContainer = document.createElement("div");
  menuContainer.id= "menu-container";
  menuContainer.innerHTML = 
  `
  <div class="menu">
    <h2 class="title">Pizza's</h2>
    <hr>
    <div class="grid-container">
      <div class="grid-item">
        <h4 class="grid-item-title">Pizza Pomodoro Mozzarella</h4>
        <p class="grid-item-description">Shredded mozzarella & san marzano tomato sauce.</p>
        <p class="grid-item-price">$16.95</p>
      </div>
      <div class="grid-item">
        <h4 class="grid-item-title">Pizza Corina</h4>
        <p class="grid-item-description">Sweet Italian sausage, ricotta cheese, mozzarella & San Marzano tomato sauce.</p>
        <p class="grid-item-price">$18.95</p>
      </div>
      <div class="grid-item">
        <h4 class="grid-item-title">Pizza Bianca</h4>
        <p class="grid-item-description">Sliced chicken, fresh broccoli florets & mozzarella cheese with a homemade cream sauce.</p>
        <p class="grid-item-price">$17.95</p>
      </div>
      <div class="grid-item">
        <h4 class="grid-item-title">Pizza Pugliese</h4>
        <p class="grid-item-description">Pepperoni, Italian sausage, mushrooms, peppers, onions, mozzarella cheese & San Marzano tomato sauce.</p>
        <p class="grid-item-price">$18.95</p>
      </div>
      <div class="grid-item">
        <h4 class="grid-item-title">Pizza Margherita</h4>
        <p class="grid-item-description">Fresh mozzarella, crushed San Marzano tomato & fresh basil. Drizzled with extra virgin olive oil.</p>
        <p class="grid-item-price">$17.95</p>
      </div>
      <div class="grid-item">
        <h4 class="grid-item-title">Pizza Capricciosa</h4>
        <p class="grid-item-description">Portabella mushrooms, eggplant & fire-roasted peppers with San Marzano tomato sauce, mozzarella cheese & fresh basil.</p>
        <p class="grid-item-price">$17.95</p>
      </div>
      <div class="grid-item">
        <h4 class="grid-item-title">Pizza Christina</h4>
        <p class="grid-item-description">San Marzano tomato sauce, mozzarella cheese, sweet Italian sausage & domestic mushrooms.</p>
        <p class="grid-item-price">$18.95</p>
      </div>
      <div class="grid-item">
        <h4 class="grid-item-title">Pizza Romana</h4>
        <p class="grid-item-description">A white pizza with mozzarella, prosciutto & arugula, topped with a drizzle of balsamic nectar.</p>
        <p class="grid-item-price">$17.95</p>
      </div>
    </div>
  </div>
  `

  return menuContainer;
}

export default menu;