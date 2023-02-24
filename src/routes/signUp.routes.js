const Router = require ("express");
const router = Router();
const usersModel = require ('../dao/models/users.model');

router.get ('/',(req,res) =>{
    res.render('signUp')
})

router.post ('/', async (req,res) =>{
    const {first_name, last_name, email, password, age} = req.body;
    try {
        const user = await usersModel.create({
            first_name,
            last_name,
            email,
            password,
            age  
        });
        res.status(200).send({message: "success", data: user});
    }catch (err) {
        res.status(500).json({ err: err.message});
    }
})

module.exports = router;