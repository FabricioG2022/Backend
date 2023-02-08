const mongoose = require ("mongoose");

const cartsCollection = 'carts';


const cartSchema = new mongoose.Schema({
    products: {
       type: Array,
       default: [],
    }
})

module.exports = mongoose.model(cartsCollection,cartSchema);