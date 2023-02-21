const fs = require('fs');


class ProductManager {

    constructor(path) {
        this.products = [];
        this.id = 0;
        this.path = path;



    }
    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title && !description && !price && !thumbnail && !code && !stock) {
            return "Complete todos los campos por favor"

        } else {
            this.products.push({ title, description, price, thumbnail, code, stock, id: this.id++ })
            this.guardaProduct();
        }

    }

    getProducts() {
        return this.products;
    }
    getProductById(id) {

        const IdProducto = this.products.find(prod => prod.id === id)

        if (IdProducto) {
            return IdProducto
        } else {
            return "Not found"
        }

    }
    cargaProduct() {
        try {
            this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"))
        } catch (err) {
            throw new Error(err);
        }

    }
    guardaProduct() {
        try {
            fs.writeFileSync(this.path, JSON.stringify(this.products));
        } catch (err) {
            throw new Error(err);
        }
    }
    eliminaProduct() {
        try {
            fs.unlinkSync(this.path);
        } catch (err) {
            throw new Error(err);
        }
    }
}

const productManager = new ProductManager('../public/productos.json');

module.exports = productManager;


