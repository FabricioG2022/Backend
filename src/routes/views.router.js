const express = require("express");
const modelProduct = require("./productRouter")
const router = express.Router();


router.get('/products',(req,res) => { 
    res.render('index',{modelProduct});
})

router.post('/products',(req,res)=>{
    const { title, description, price, category, code, stock } = req.body;
})

module.exports = router;
