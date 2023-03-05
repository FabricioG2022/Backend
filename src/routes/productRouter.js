const express = require("express");
const productRouter = express.Router();
const mongoosePaginate = require("mongoose-paginate-v2");
const productsModel = require("../dao/models/products.model");


productRouter.get('/', async (req, res) => {
    const opciones = {
        limit: parseInt(req.query.limit, 10) || 10,
        page: parseInt(req.query.page, 10) || 1,
        sort: parseInt(req.query.sort, 1) || null
    };
    try {
        const modelProduct = await productsModel.paginate({}, opciones)
        res.send(modelProduct);
    } catch (error) {
        console.log(error)
    }

});


productRouter.get('/:pid', async (req, res) => {
    try {
        const product = await productsModel.findById(req.params.id);
        if (!product)
            return res.status(404).json({ message: "The product was not found" });
        res.json(product);
    } catch (error) {
        console.log(error)
    }


});


productRouter.post('/', async (req, res) => {
    try {
        const { title, description, code, price, thumbnail, stock, category, status } = req.body;
        const newProduct = new productsModel(req.body);
        const productSaved = await newProduct.save();
        if (!title && !description && !code && !price && !thumbnail && !stock && !category &&!status) {
            return res.status(400).send({ status: "error", error: "Campos incompletos" })
        }

        res.send({ status: "success", message: "Producto ingresado", producto: productSaved })
        console.log(req.body)
    } catch (error) {
        console.log(error)
    }

})



productRouter.put('/:pid', async (req, res) => {
    const productUpdated = await productsModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: false }
    );
    res.send(productUpdated);
})

productRouter.delete('/:pid', async (req, res) => {
    const productRemoved = await productsModel.findByIdAndDelete(req.params.id);
    res.send(productRemoved);
})

module.exports = productRouter;

