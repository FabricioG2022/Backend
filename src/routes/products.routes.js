const Router = require ("express");
const router = Router();
const ProductManager = require ("../dao/classes/DBManager")

router.get("/",(req,res)=>{
    try {
        const product = ProductManager.read()
    res.send(product);
    }catch (err) {
        throw err;
    }
    
});
module.exports = router;
