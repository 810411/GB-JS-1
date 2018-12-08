'use strict';

// Массив товаров
const cars = [
  {id: '1', name: 'Acura NSX', price: 150000, pict: './img/acura.jpg'},
  {id: '2', name: 'Bentley Continental GT', price: 232500, pict: './img/bentley.jpg'},
  {id: '3', name: 'Audi RS5', price: 80900, pict: './img/audi.jpg'},
  {id: '4', name: 'BMW 8-Series', price: 140000, pict: './img/bmw.jpg'},
  {id: '5', name: 'Aston Martin DBS', price: 304995, pict: './img/aston.jpg'},
  {id: '6', name: 'Bugatti Divo', price: 5800000, pict: './img/bugatti.jpg'}
];

const showCase = document.getElementById('showcase');

// Заполнение витрины магазина
for (const car of cars) {
  const box = document.createElement('div');
  const img = document.createElement('img');
  const btn = document.createElement('button');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  p.textContent = `${car.price.toLocaleString('ru-RU', {style: 'currency', currency: 'USD'})}`;
  h3.textContent = `${car.name}`;
  btn.id = car.id;
  img.src = `${car.pict}`;
  img.alt = `${car.name}`;
  box.classList.add('box');

  box.appendChild(img);
  box.appendChild(btn);
  box.appendChild(h3);
  box.appendChild(p);
  showCase.appendChild(box);
}
