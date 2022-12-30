const fs = require('fs');
const express = require("express");
const app = express();

app.get('/products', async (res, req) => {
    const productos = await ProductManager.getProducts();
    const limit = req.query.limit;
    if (limit && !isNaN(Number(limit))) {
        respuesta = this.products.slice(0, limit);
    }
    res.send(productos);
});

app.get('/products/:pid', (res, req) => {
    const pid = this.products.find(prod => prod.id === Number(req.params.id))
    res.send(pid)
});

app.listen(8080, () => { console.log("Server running") });



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

productManager = new ProductManager('./productos.json');




