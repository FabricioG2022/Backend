const mongoose = require ("mongoose");

const productsCollection = 'products';


const productsSchema = new mongoose.Schema({
   title: String,
   description: String,
   code: String,
   price: Number,
   thumbnail: String,
   stock: Number,
   category: String,
   status: Boolean,
})

module.exports = mongoose.model(productsCollection,productsSchema);