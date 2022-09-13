const listProduct = () =>  {
    return fetch('https://631b82111b470e0e12f03afc.mockapi.io/DatosProducts').then(response => response.json());
}


const descriptionProduct = () => {
    return fetch(`https://631b82111b470e0e12f03afc.mockapi.io/DatosProducts/`).then(response => response.json()).then(data => console.log(data));
}



const newProduct = (img, category, name, price, description, idv4) => {
    return fetch('https://631b82111b470e0e12f03afc.mockapi.io/DatosProducts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            img,
            category,
            name,
            price,
            description,
            idv4
        })
    })
}

export const productServices =  {
    newProduct,
    listProduct,
    descriptionProduct
}