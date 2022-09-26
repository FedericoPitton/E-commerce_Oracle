const listProduct = () => {
    return fetch(`https://631b82111b470e0e12f03afc.mockapi.io/DatosProducts`).then(response => response.json());
}


const descriptionProduct = () => {
    return fetch(`https://631b82111b470e0e12f03afc.mockapi.io/DatosProducts/`).then(response => response.json());
}

const detalleProduct = (id) => {
    return fetch(`https://631b82111b470e0e12f03afc.mockapi.io/DatosProducts/${id}`).then(respuesta => respuesta.json());
}

const actualizarProduct = (id, img, category, name, price, description) => {
    return fetch(`https://631b82111b470e0e12f03afc.mockapi.io/DatosProducts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/Json'
        },
        body: JSON.stringify({ img, category, name, price, description })
    }).then(response => response).catch(error => console.log(error))
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

export const productServices = {
    newProduct,
    listProduct,
    descriptionProduct,
    detalleProduct,
    actualizarProduct
}