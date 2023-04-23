const Router = require("express");
const router = Router();
const {loggerTesting} = require ('../controllers/logger.controller');

router.get('/', loggerTesting);

module.exports = router;
