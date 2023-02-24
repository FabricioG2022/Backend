const Router = require ("express");
const router = Router();
const usersModel = require ('../dao/models/users.model')

router.get ('/',(req,res) =>{
    res.render('login')
})

router.post ('/', async (req,res) =>{
    const {username, password} = req.body;
    try{
        const result = await usersModel.findOne({email: username, password: password})
        if (result) {
            req.session.user = result;
            res.status(200).json({message: "success", data: result});
        }else {
            res.status(404).json({message:"error", data: "User not found"});
        }
    }catch (error) {
        res.status(500).json({error: error.message})
    }
});

module.exports = router;