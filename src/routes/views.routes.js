const express = require("express");
const router = express();
const {renderProduct, renderLogin, renderSign, renderCarts} = require ('../controllers/views.controller');

router.get('/', renderProduct);

router.get('/login', renderLogin);

router.get('/signUp', renderSign);

router.get('/carts', renderCarts);


module.exports = router;

