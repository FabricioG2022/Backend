const Router = require("express");
const router = Router();0

const {renderSignUp, signUp, renderSignIn, signIn, logout} = require('../controllers/users.controller');

router.get('/signup', renderSignUp);

router.post('/signup', signUp);

router.get('/signin', renderSignIn);

router.post('/signin', signIn);

router.get('/logout', logout);

module.exports = router;
