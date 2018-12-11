'use strict';

const imgGalleryArr = [
  'acura',
  'aston',
  'audi',
  'bentley',
  'bmw',
  'bugatti'
];

const currentPhoto = document.getElementById('currentPhoto');
const nextPhoto = document.getElementById('nextPhoto');
const prevPhoto = document.getElementById('prevPhoto');

let step = 0;

function setCurrentPhoto() {
  if (step > imgGalleryArr.length - 1) {
    step = 0;
  } else if (step < 0) {
    step = imgGalleryArr.length - 1;
  }
  currentPhoto.src = `../task_2/img/${imgGalleryArr[step]}.jpg`;
}

setCurrentPhoto();

nextPhoto.onclick = () => {
  step++;
  setCurrentPhoto();
};

prevPhoto.onclick = () => {
  step--;
  setCurrentPhoto();
};
