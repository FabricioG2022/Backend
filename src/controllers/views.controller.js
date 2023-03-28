const viewCtrl = {}

const modelProduct = require("../routes/products.routes");

viewCtrl.renderProduct = (req,res) => { 
    res.render('products', {
        title: 'Home page',
        style: 'product.css'
    })
};

viewCtrl.renderLogin = (req,res) => {
    res.render('login', {
        title: 'Login',
        style: 'login.css'
    });
    
};

viewCtrl.renderSign = (req,res) => {
    res.render('signUp', {
        title: 'Registro',
        style: 'signUp.css'
    });
    
};

viewCtrl.renderCarts = (req,res) => {
    res.render('carts', {
        title: 'Carrito',
        style: 'carts.css'
    });
    
};

module.exports = viewCtrl;