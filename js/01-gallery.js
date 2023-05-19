import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsMarkup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
     </li>`
).join("");
const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryList.addEventListener('click', event => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const imageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="" height="">
`);
  instance.show();
});

document.addEventListener('keydown', event => {
  const instance = basicLightbox.getInstance();
  if (event.code === 'Escape' && instance.visible()) {
    instance.close();
  }
});
console.log(galleryItems);

