import  {productServices} from '../../js/services/product.services.js'

const form = document.querySelector('[data-form]'); 

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const img = document.querySelector('[data-img]').value;
    const category = document.querySelector('[data-category]').value;
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const description = document.querySelector('[data-description]').value;
    const idv4 = uuid.v4();
    
    productServices.newProduct(img, category, name, price, description, idv4).then(respuesta => {
        alert("Producto creado con exito");
    }).catch((error)=> console.log(error));
    
    document.querySelector('[data-img]').value = "";
    document.querySelector('[data-category]').value = "";
    document.querySelector('[data-name]').value = "";
    document.querySelector('[data-price').value = "";
    document.querySelector('[data-description]').value = "";
});