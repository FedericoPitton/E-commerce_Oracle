import { productServices } from '../services/product.services.js';

function obtenerInformacion() {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const img = document.querySelector('[data-img]');
    const category = document.querySelector('[data-category]');
    const name = document.querySelector('[data-name]');
    const price = document.querySelector('[data-price]');
    const description = document.querySelector('[data-description]');
    productServices.detalleProduct(id).then(product => {
        img.value = product.img;
        category.value = product.category;
        name.value = product.name;
        price.value = product.price;
        description.value = product.description;
    });

}

obtenerInformacion();

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const img = document.querySelector('[data-img]').value;
    const category = document.querySelector('[data-category]').value;
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const description = document.querySelector('[data-description]').value;

    productServices.actualizarProduct(id, img, category, name, price, description).then(() => {
        window.location.href = 'index.html';
    }).catch((error) => console.log(error));

    // document.querySelector('[data-img]').value = "";
    // document.querySelector('[data-category]').value = "";
    // document.querySelector('[data-name]').value = "";
    // document.querySelector('[data-price').value = "";
    // document.querySelector('[data-description]').value = "";
});