import { productServices } from '../../js/services/product.services.js'

const newLine = (id, img, category, name, price, description, idv4) => {
    var section = document.createElement('section');
    section.classList.add('product');
    section.classList.add('container');
    section.classList.add('new');
    section.setAttribute('data-id', idv4);
    section.setAttribute('data-category', category);

    section.innerHTML = `<div class="product__img">
                            <img src="${img}" alt="">
                        </div>
                        <div class="product__info">
                            <h3 class="product__title">${name}</h4>
                            <h4 class="product__price">$ ${price}</h4>
                            <h4 class="product__description">${description}</h4>
                        </div>`
    return section;
}

// const nuevaLinea =newLine(1,"assets/cascosvg.svg","starwars","Prueba",80,"loremblablabla",509);



const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = (url.searchParams.get('id'));
    productServices.listProduct().then(product =>  {
        product.forEach(element => {
            if(element.idv4 === id) {
                const div =document.querySelector('[data-product]');
                const section = newLine(element.id,element.img,element.category,element.name,element.price,element.description,element.idv4);
                div.appendChild(section);
            }

        });
    });
}

obtenerInformacion();