const express = require ("express");
const productRouter = express.Router();
const ProductManager = require ("../dao/persistencia")



productRouter.get('/', async (req, res) => {
    
    const productos = await ProductManager.getProducts();
    const limit = req.query.limit;
    if (limit && !isNaN(Number(limit))) {
        respuesta = this.products.slice(0, limit);
    } 
    
    res.send(productos);
});


productRouter.get('/:pid', (req, res) => {
    let {pid} = +req.params;
    const productid = this.products.find(prod => prod.id === Number(req.params.id))
    res.send(productid);
});


productRouter.post('/:pid', (req,res) => {
    const {title,description,price,category,code,stock} = req.body;
    
     if (!title && !description && !price && !category && !code && !stock){
         return res.status(400).send({status:"error",error:"Campos incompletos"})
     }
    
     res.send({status:"success",message:"Producto ingresado",producto:req.body})
})

productRouter.put('/:pid', (req,res) => {
    const {pid} = req.params;
    const producto = req.body;
    productoId = producto.find ((c) => c.id === +req.params.id);
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

productRouter.delete('/:pid', (req,res) => {
    producto = producto.filter ((c) => c.id !== +req.params.id);
    res.send ("Se elimino el producto");
})

module.exports = productRouter; 

