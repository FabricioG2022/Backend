const Router = require("express");
const router = Router();

const {renderSign, registerPost} = require ('../controllers/register.controller');

router.get('/', renderSign);

router.post('/', registerPost);

module.exports = router;