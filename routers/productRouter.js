const express = require ("express");
const productRouter = express.Router();


productRouter.get('/products', async (res, req) => {
    const productos = await ProductManager.getProducts();
    const limit = req.query.limit;
    if (limit && !isNaN(Number(limit))) {
        respuesta = this.products.slice(0, limit);
    }
    res.send(productos);
});


productRouter.get('/products/:pid', (res, req) => {
    const pid = this.products.find(prod => prod.id === Number(req.params.id))
    res.send(pid)
});


productRouter.post('/products/:pid', (res,req) => {
    const producto = req.body;
    if (!title && !description && !price && !category && !code && !stock){
        return res.status(400).send({status:"error",error:"Campos incompletos"})
    }
    res.send(producto);
    res.send({status:"success",message:"Producto ingresado"})
})

productRouter.put('/products/:pid', (res,req) => {
    productoId = producto.findIndex ((c) => c.id === +req.params.id);
    producto [productoId] = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        code: req.body.code,
        stock: req.body.stock,
    } 
    res.send ("Se ha actualizado el producto");
})

productRouter.delete('/products/:pid', (res,req) => {
    producto = producto.filter ((c) => c.id !== +req.params.id);
    res.send ("Se elimino el producto");
})

module.exports = {
    productRouter,
}
