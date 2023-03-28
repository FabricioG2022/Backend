const dotenv = require("dotenv"); 

dotenv.config();

const config = {
    PORT: process.env.SERVER_PORT || 8080,
    USERNAME: process.env.USER_MONGO || null,
    PASSWORD: process.env.PASS_MONGO || null,
    DB_NAME: process.env.DB_MONGO || null,
    MONGOURL: process.env.MONGO_URL, 
}

module.exports = config;