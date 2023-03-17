const express = require("express");
const modelProduct = require("./products.routes.js")
const router = express();


router.get('/', (req,res) => { 
    res.render('products', {
        title: 'Home page',
        style: 'product.css'
    })
})

router.get('/login', (req,res) => {
    res.render('login', {
        title: 'Login',
        style: 'login.css'
    });
    
})

router.get('/signUp', (req,res) => {
    res.render('signUp', {
        title: 'Registro',
        style: 'signUp.css'
    });
    
})

router.get('/carts', (req,res) => {
    res.render('carts', {
        title: 'Carrito',
        style: 'carts.css'
    });
    
})


module.exports = router;

