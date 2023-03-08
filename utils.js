const {fileURLToPath} = require ('url');


const bcrypt = require ('bcrypt');


const createHash = password => bcrypt.hashSync(password,bcrypt.genSaltSync(10));
const isValidPassword = (user,password) => bcrypt.compareSync(user,password);







module.exports = createHash, isValidPassword
