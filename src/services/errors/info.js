const generateProductsErrorInfo = (product) => {
    return `One or more propierties were incomplete or not valid.
    List of required properties:
    *title: needs to be a String, received ${product.title}
    *description: needs to be a String, received ${product.description}
    *code: needs to be a String, received ${product.code}
    *price: needs to be a String, received ${product.price}
    *thumbnail: needs to be a String, received ${product.thumbnail}
    *stock: needs to be a String, received ${product.stock}
    *category: needs to be a String, received ${product.category}
    *status: needs to be a String, received ${product.status}`
}