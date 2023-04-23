const loggerCtrl = {};
const {addLogger} = require('../config/logger');

loggerCtrl.loggerTesting = (req,res) => {
        req.logger.debug('¡Prueba de debug!');
        req.logger.info('¡Prueba de info!')
}

module.exports = loggerCtrl;
