import  {productServices} from '../services/product.services.js'

const newLine = (id,img, category, name, price, description, idv4) => {
    var div = document.createElement('div');
    div.classList.add('products__info__container');
    div.setAttribute('data-id', idv4);
    div.setAttribute('data-category',category);
    
    div.innerHTML =`<img src="${img}" alt="">
    <div class="products__info">
        <h4 class="products__info__title">${name}</h4>
        <h4 class="products__info__price">$ ${price}</h4>
        <h4 class="products__info__code">#${id}</h4>
    </div>
    <div class="products__edit-delete">
        <a href="#"><img src="assets/delete.svg" class="products__delete"></a>
        <a href="#"><img src="assets/edit.svg" class="products__edit"></a>
    </div>`
    return div;
}

const category_starwars = document.querySelector('[data-starwars]');
const category_consolas = document.querySelector('[data-consolas]');
const category_diversos = document.querySelector('[data-diversos]');

productServices.listProduct().then((products) => {
    products.forEach(({id, img, category, name, price, description, idv4}) => {
        const newProducto = newLine(id,img, category, name, price, description, idv4);
        const ver = toString(category);
        if(category == "starwars") {category_starwars.appendChild(newProducto);}
        else if (category == "consolas") {category_consolas.appendChild(newProducto);}
        else if (category == "diversos") {category_diversos.appendChild(newProducto);}
    });
});


