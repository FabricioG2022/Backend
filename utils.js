const {fileURLToPath} = require ('url');
const {dirname} = ('path');
const __dirname = dirname(fileURLToPath(import.meta.url));

module.exports = __dirname;