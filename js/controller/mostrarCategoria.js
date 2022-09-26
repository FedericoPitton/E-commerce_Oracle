import { productServices } from '../services/product.services.js';

const url = new URL(window.location);
const categoryUrl = url.search.substring(1);

const newLine = (id, img, category, name, price, description, idv4) => {
    var div = document.createElement('div');
    div.classList.add('products__info__container');
    div.setAttribute('data-id', idv4);
    div.setAttribute('data-category', category);

    div.innerHTML = `<img src="${img}" alt="" class="products__info__img">
    <div class="products__info">
        <h4 class="products__info__title">${name}</h4>
        <h4 class="products__info__price">$ ${price}</h4>
        <h4 class="products__info__code">#${id}</h4>
    </div>`

    var div2 = document.createElement('div')
    div2.classList.add('products__edit-delete');

    var deleteIcon = document.createElement('a');
    deleteIcon.innerHTML = `<img src="assets/delete.svg" class="products__delete" idv4=${idv4}>`
    // deleteIcon.addEventListener('click', deleteF);

    var editIcon = document.createElement('a');
    editIcon.setAttribute('href', `editProduct.html?id=${id}`)
    editIcon.innerHTML = `<img src="assets/edit.svg" class="products__edit" idv4=${idv4}>`
    // editIcon.addEventListener('click', editF);

    div2.appendChild(deleteIcon);
    div2.appendChild(editIcon);
    div.appendChild(div2);
    return div;
}

// function deleteF() {
//     console.log("Hola");
// }
// function editF() {
//     console.log("CHAU");
// }
const data_primera = document.querySelector('[data-primera]');
// const category_consolas = document.querySelector('[data-consolas]');
// const category_diversos = document.querySelector('[data-diversos]');

productServices.listProduct().then((products) => {
    products.forEach(({ id, img, category, name, price, description, idv4 }) => {
        const newProducto = newLine(id, img, category, name, price, description, idv4);
        if (categoryUrl == category) { data_primera.appendChild(newProducto); }
        else if (categoryUrl == category) { data_primera.appendChild(newProducto); }
        else if (categoryUrl == category) { data_primera.appendChild(newProducto); }
    });
});



