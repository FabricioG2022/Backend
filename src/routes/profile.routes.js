const Router = require ("express");
const router = Router();
const usersModel = require ('../dao/models/users.model');
const { prof } = require ('../controllers/profile.controller');

router.get ('/', prof)


module.exports = router;