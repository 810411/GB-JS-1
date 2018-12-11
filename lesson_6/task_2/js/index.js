'use strict';

const buttonAdd = document.querySelectorAll('.box > button');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const shoppingList = document.getElementById('cart-list');

let totalPrice = 0;
let totalItems = 0;

// Обработка события добавления в корзину
function addToCart(event) {
  const car = cars.filter(car => car.id === this.id)[0];

  totalItems++;
  totalPrice += car.price;

  cartCount.textContent = totalItems;
  cartTotalPrice.textContent = totalPrice.toLocaleString('ru-RU', {style: 'currency', currency: 'USD'});

  const purchase = document.createElement('li');
  purchase.textContent = `${car.name} - ${car.price.toLocaleString('ru-RU', {style: 'currency', currency: 'USD'})}`;
  console.log(purchase);
  shoppingList.appendChild(purchase);
}

// Прослушивание добавления в корзину
for (let btn of buttonAdd) {
  btn.addEventListener('click', addToCart);
}
