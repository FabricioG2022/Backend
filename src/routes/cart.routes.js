const express = require ("express");
const cartRouter = express.Router();

const { find, findById, post, deletePid, put} = require ('../controllers/cart.controller')



cartRouter.get('/', find);

cartRouter.get('/:cid', findById);

cartRouter.post('/', post);

cartRouter.delete('/:cid/products/:pid', deletePid);

cartRouter.put('/:cid/products/:pid', put);

module.exports = cartRouter;