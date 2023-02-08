const cartsModel = require ("../models/carts.model");
const productModel = require ("../models/products.model");


class CartManager {
    async read () {
        try {
            const carts = await cartsModel.find();
            return carts;
        }catch (err){
            throw err;
        }
    } 
    async create (cart) {
        try {
            const newCart = new cartsModel(cart);
            await newCart.save();
            return newCart;
        }catch (err){
            throw err;
        }
    }
    async delete (cartId) {
        try {
            await cartsModel.findByIdAndDelete(cartId);
        }catch (err) {
            throw err;
        }
    }
    async addProduct (cartId, productoId) {
        try {
            const result = await cartsModel.find({_id: cartId});
            if (result.length === 0) {
                throw new Error("Carrito no encontrado");
            }
            result[0].products.push(productoId);
            await cartsModel.findByIdAndUpdate(cartId, result[0]); 
        }catch (err) {
            throw err;
        }
    }
}

class ProductManager {
    async read () {
        try {
            const products = await productModel.find();
            return products;
        }catch (err){
            throw err;
        }
    } 
    async create () {
        try {
            const newProducts = new productModel(cart);
            await newProducts.save();
        }catch (err){
            throw err;
        }
    }
    async delete (cartId) {
        try {
            await productModel.findByIdAndDelete(cartId);
        }catch (err) {
            throw err;
        }
    }
    
}

module.exports = CartManager, ProductManager;