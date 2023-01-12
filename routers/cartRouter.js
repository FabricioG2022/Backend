const express = require ("express");
const cartRouter = express.Router();

cartRouter.post('/', (res,req) => {
   class Carrito {
    constructor () {
        this.id = 0;
        this.productos = [];
    }
   }
})

cartRouter.get('/:cid', (res,req) => {
    res.send (this.productos);
   
})

cartRouter.post('/:cid/product/:pid', (res,req) => {
    this.productos.push({product: id, quantity:50++})
   
})


module.exports = {
    cartRouter,
}