const express = require("express");
const {getmock} = require('../controllers/mockingProducts.controller');
const mockingRouter = express.Router();

mockingRouter.get('/mockingproducts', getmock);

module.exports = mockingRouter;
