const Router = require ("express");
const router = Router();
const usersModel = require ('../dao/models/users.model')

router.get ('/',(req,res) =>{
    res.render('profile')
})


module.exports = router;