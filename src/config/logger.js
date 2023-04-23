const winston = require('winston');
const dotenv = require("dotenv");

dotenv.config();

const customLevelsOptions = {
    levels: {
        debug: 1,
        http: 2,
        info: 3,
        warning: 4,
        error: 5,
        fatal: 6
    },
    colors: {
        debug: 'white',
        http: 'green',
        info: 'blue',
        warning: 'yellow',
        error: 'orange',
        fatal: 'red',
    }
}
let logger;

if (process.env.NODE_ENV === "desarrollo") {
    logger = winston.createLogger({
        levels: customLevelsOptions.levels,
        trasnsports: [
            new winston.transports.Console({
                level: "debug",
                format: winston.format.combine(
                    winston.format.colorize({ colors: customLevelsOptions.colors }),
                    winston.format.simple()
                )
            }),
        ]
    })
} else {
    logger = winston.createLogger({
        levels: customLevelsOptions.levels,
        trasnsports: [
            new winston.transports.File({
                filename: 'errors.log',
                level: 'info',
                format: winston.format.combine(
                    winston.format.colorize({ colors: customLevelsOptions.colors }),
                    winston.format.simple()
                )
            }),
        ]
    })
}




const addLogger = (req, res, next) => {
    req.logger = logger;
    req.logger.fatal(`${req.method} en ${req.url} - ${new Date().toISOString}`);
    req.logger.error(); (`${req.method} en ${req.url} - ${new Date().toISOString}`);
    req.logger.warning(); (`${req.method} en ${req.url} - ${new Date().toISOString}`);
    req.logger.info(); (`${req.method} en ${req.url} - ${new Date().toISOString}`);
    req.logger.debug(); (`${req.method} en ${req.url} - ${new Date().toISOString}`);
    next();
}

module.exports = { addLogger };