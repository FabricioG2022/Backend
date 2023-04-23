const {generateProduct} = require ('../config/utils');
const mockingProducts = {};

mockingProducts.getmock = async (req,res) => {
    try{
        let products = []
        for (let i=0; i<100; i++){
            let producto = generateProduct()
            products.push(producto)
        }
        console.log(products.length)
        res.status(200).send(products)
        
    }catch(err){
        res.status(500).send("error");
    }
}

module.exports = mockingProducts;