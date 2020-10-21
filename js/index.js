// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(whiteSauce => {
    if (state.whiteSauce) {
      whiteSauce.style.visibility = 'visible';
    } else {
      whiteSauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(glutenFree => {
    if (state.glutenFreeCrust) {
      glutenFree.style.visibility = 'visible';
    } else {
      glutenFree.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
let pepperoniButton = document.querySelector(".btn-pepperoni");
let mushroomButton = document.querySelector(".btn-mushrooms");
let greenPepperButton = document.querySelector(".btn-green-peppers");
let sauceButton = document.querySelector(".btn-sauce");
let glutenFreeButton = document.querySelector(".btn-crust")

if (state.pepperoni) {
  pepperoniButton.classList.add('active');
} else {
  pepperoniButton.classList.remove('active');
}
if(state.mushrooms){
  mushroomButton.classList.add('active');
} else {
  mushroomButton.classList.remove('active');
}
if(state.greenPeppers){
  greenPepperButton.classList.add('active');
} else {
  greenPepperButton.classList.remove('active');
}
if(state.whiteSauce){
  sauceButton.classList.add('active');
} else {
  sauceButton.classList.remove('active');
}
if(state.glutenFreeCrust){
  glutenFreeButton.classList.add('active');
} else {
  glutenFreeButton.classList.remove('active');
}
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  document.querySelector("aside ul").innerHTML = "";
  if (state.pepperoni) {
    document.querySelector("aside ul").innerHTML += `<li>$${ingredients.pepperoni.price} pepperonni</li>`;
    totalPrice += ingredients.pepperoni.price
  }
  if (state.mushrooms) {
    document.querySelector("aside ul").innerHTML += `<li>$${ingredients.mushrooms.price} mushrooms</li>`;
    totalPrice += ingredients.mushrooms.price
  }
  if (state.greenPeppers) {
    document.querySelector("aside ul").innerHTML += `<li>$${ingredients.greenPeppers.price} green peppers</li>`;
    totalPrice += ingredients.greenPeppers.price
  }
  if (state.whiteSauce) {
    document.querySelector("aside ul").innerHTML += `<li>$${ingredients.whiteSauce.price} white sauce</li>`;
    totalPrice += ingredients.whiteSauce.price
  }
  if (state.glutenFreeCrust) {
    document.querySelector("aside ul").innerHTML += `<li>$${ingredients.glutenFreeCrust.price} gluten-free crust</li>`;
    totalPrice += ingredients.glutenFreeCrust.price
  }
  document.querySelector("aside strong").innerHTML = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});