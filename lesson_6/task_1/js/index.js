'use strict';

function changeBigPicture(event) {
  const bigPicture = document.querySelector('.big_picture');
  const img = document.createElement('img');

  img.src = event.currentTarget.src.replace('small', 'big');
  bigPicture.innerHTML = '';
  img.onload = () => bigPicture.appendChild(img);
  img.onerror = () => bigPicture.textContent = '404. Изображение не найдено';
}

document.addEventListener("DOMContentLoaded", () => {
  const images = document.getElementsByClassName('gallery');
  for (const img of images) {
    img.addEventListener('click', changeBigPicture)
  }
});
