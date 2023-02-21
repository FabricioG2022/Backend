const mongoose = require ("mongoose");
const mongoosePaginate = require ("mongoose-paginate-v2");
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
productsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model(productsCollection,productsSchema);