const mongoose = require ("mongoose");

const cartsCollection = 'carts';


const cartSchema = new mongoose.Schema({
    title: String,
   description: String,
   code: String,
   price: Number,
   thumbnail: String,
   stock: Number,
   category: String,
   status: Boolean,
})

module.exports = mongoose.model(cartsCollection,cartSchema);