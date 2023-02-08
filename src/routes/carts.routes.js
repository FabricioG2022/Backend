const Router = require ("express");
const router = Router();
const CartManager = require ("../dao/classes/DBManager")



router.get("/", async(req,res)=>{
    try {
        const manager = await CartManager.read()
    res.send(manager);
    }catch (err) {
        res.status(500).send (err.message);
    }
    
});

router.post("/", async(req,res)=>{
    try {
        const response = await CartManager.create();
        res.status(200).send({message:"Carrito creado",response});
    }catch (err) {
        res.status(500).send (err.message);
    }
}) 

module.exports = router;