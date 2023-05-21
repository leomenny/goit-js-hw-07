import { galleryItems } from './gallery-items.js';

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
const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    const largeSourse = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${largeSourse}" width="800" height="600">
    `);

    instance.show();
   
    const closeEscape = (event) => {
      if (event.key === 'Escape') {
        instance.close();
      }
    };

    window.addEventListener('keydown', closeEscape);
    
    instance.on('close', () => {
      window.removeEventListener('keydown', closeEscape);
    });
  }
});

  
//   const source = event.target.dataset.source;

//   const instance = basicLightbox.create(`
//     <img src="${source}" width="800" height="600">
// `);
//   instance.show();

// document.addEventListener('keydown', event => {
//   if (event.code === 'Escape') {
//     instance.close();
//   }
// })
// });

// console.log(galleryItems);





