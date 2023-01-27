const express = require("express");

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index',{ productList });
})

router.get('/realTimeProducts',(req,res)=>{
    res.render('index',{});
})

module.exports = router;
