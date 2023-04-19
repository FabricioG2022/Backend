const EErrors = require('../../services/errors/enums');

const errorHandler = async (error, req, res, next) => {
    switch (error.code) {
        case EErrors.INVALID_TYPES_ERROR:
            res.send({ status: "error", error: error.name })
            break;
        default:
            res.send({ status: "error", error: "unhandled error" });
    }
}

module.exports = errorHandler;
