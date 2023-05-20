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
const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);


galleryList.addEventListener('click', event => {
  event.preventDefault();
  
  const source = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`);
  instance.show();

document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    instance.close();
  }
})
});




// galleryList.addEventListener('click', event => {
//     event.preventDefault()
//     if(event.target.nodeName !== 'IMG') {
//       return;
//     }

// const source = event.target.dataset.source;
//    const instance = basicLightbox.create(`
// 		<img src="${source}" width="800" height="600">
// 	`), {
//     onShow: (instance) => { 
//     window.addEventListener('keydown', showImg => {
//     showImg.preventDefault();
//     instance.show();
// })
// };
//   onClose: (instance) => { 
//   window.removeEventListener('keydown', closeImg => {
//     if(event.code === 'Escape') {
//     instance.close();
//     }
//   })
//   }
// }
//   });
  


 


console.log(galleryItems);






