"use strict";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const imagesList = document.querySelector(`div.gallery`);
const imagesMarkup = createImages(galleryItems);
imagesList.insertAdjacentHTML(`beforeend`, imagesMarkup);

function createImages(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item"><a href="${original}">
 <img class="gallery__image" src="${preview}" alt="${description}" /></a></div>`
    }).join(``);
};

imagesList.addEventListener(`click`, imagesClick);

function imagesClick(evt) {
    evt.preventDefault();
    const galleryImage = evt.target.classList.contains(`gallery__item`);
    if (!galleryImage) {
        return;
    };
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250,
});
console.log(galleryItems);
