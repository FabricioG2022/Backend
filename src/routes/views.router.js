const express = require("express");
const modelProduct = require("./productRouter")
const router = express.Router();


router.get('/', async(req,res) => { 
    res.render('index',{modelProduct});
})

router.get('/login', async(req,res) => {
    res.render('/login');
})
module.exports = router;

