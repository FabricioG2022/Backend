const express = require("express");
const productRouter = express.Router();
const {prodGet, prodGetPid, prodPost, prodPut, prodDelete} = require ('../controllers/products.controller');



productRouter.get('/', prodGet);

productRouter.get('/:pid', prodGetPid);

productRouter.post('/', prodPost);

productRouter.put('/:pid', prodPut);

productRouter.delete('/:pid', prodDelete);

module.exports = productRouter;

