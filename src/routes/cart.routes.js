const express = require ("express");
const cartRouter = express.Router();
const Product = require ('../dao/models/carts.model');




cartRouter.get('/', (req,res) => {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
        if (!products) return res.status(404).send({message:'No existen productos'})

        res.status(200).send({products}) 
    })
}) 

cartRouter.get('/:cid', (req,res) => {
    let productId = req.params.productId
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
        if (!product) return res.status(404).send({message:'El producto no existe'})

        res.status(200).send({product})
    })
})

cartRouter.post('/', (req,res) => {
    let product = new Product()
    product.title = req.body.title,
    product.description = req.body.description,
    product.price = req.body.price,
    product.category = req.body.category,
    product.code = req.body.code,
    product.stock = req.body.stock

    product.save((err, productStored) => {
        if(err) res.status(500).send({message:`Error al guardar en la base de datos: ${err}`})

        res.status(200).send({product: productStored})
    })
})

cartRouter.delete('/:cid/products/:pid', (req,res) => {
    let productId = req.params.productId

    Product.findById(productId, (err, product) =>{
        if (err) res.status(500).send({message:`Error al borrar el producto: ${err}`})

        product.remove(err=>{
            if(err) res.status(500).send({message:`Error al borrar el producto: ${err}`})
            res.status(200).send({message:'El producto ha sido eliminado'})
        })
    })
})

cartRouter.put('/:cid/products/:pid', (req,res) => {
    let productId = req.params.productId
    let update = req.body

    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) res.status(500).send({message:`Error al actualizar el producto: ${err}`})
        
        res.status(200).send({ product: productUpdated })
    })
})
module.exports = cartRouter;