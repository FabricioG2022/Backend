const Router = require("express");
const router = Router();
const passport = require("passport");
const {postRegister, getFailRegister, postLogin, getFailLog, github, githubCall} = require ('../controllers/sessions.controller');

router.post('/register', postRegister);

router.get('/failregister', getFailRegister);

router.post('/login', postLogin);

router.get('/faillogin', getFailLog);

router.get('/github', github);

router.get('/githubcallback',githubCall);

module.exports = router;