const cartCtrl = {};
const Product = require ('../dao/models/carts.model');

cartCtrl.find = (req,res) => {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
        if (!products) return res.status(404).send({message:'No existen productos'})

        res.status(200).send({products}) 
    })
};

cartCtrl.findById = (req,res) => {
    let productId = req.params.productId
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
        if (!product) return res.status(404).send({message:'El producto no existe'})

        res.status(200).send({product})
    })
};

cartCtrl.post = (req,res) => {
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
};

cartCtrl.put = (req,res) => {
    let productId = req.params.productId
    let update = req.body

    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) res.status(500).send({message:`Error al actualizar el producto: ${err}`})
        
        res.status(200).send({ product: productUpdated })
    })
}

cartCtrl.deletePid = (req,res) => {
    let productId = req.params.productId

    Product.findById(productId, (err, product) =>{
        if (err) res.status(500).send({message:`Error al borrar el producto: ${err}`})

        product.remove(err=>{
            if(err) res.status(500).send({message:`Error al borrar el producto: ${err}`})
            res.status(200).send({message:'El producto ha sido eliminado'})
        })
    })
}

module.exports = cartCtrl;