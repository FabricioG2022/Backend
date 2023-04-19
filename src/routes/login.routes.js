 const Router = require("express");
 const router = Router();
 const {render, postLogin} = require ('../controllers/login.controller');


 router.get('/', render);

 router.post('/', postLogin);

 module.exports = router;