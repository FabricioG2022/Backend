const express = require("express");
const app = express();
const cartRouter = require ('./routers/cartRouter');
const productRouter = require ('./routers/productRouter');
const ProductManager = require ("./pertenencia")


app.use (express.json());
app.use (express.urlencoded({extended:true}));
app.use ('/api/products', productRouter);
app.use ('/api/carts',cartRouter)
app.use (ProductManager)




app.listen(8080, () => { console.log("Servidor levantado") });



