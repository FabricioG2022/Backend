const express = require("express");
const app = express();
const cartRouter = require('./routers/cartRouter');
const productRouter = require('./routers/productRouter');
const handlebars = require('express-handlebars');
const { Server } = require('socket.io');
const viewsRouter = require('./routers/views.router');
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const productsRouter = require ('./routes/products.routes');
const cartsRouter = require ('./routes/carts.routes');

dotenv.config();



app.engine('handlebars', handlebars.engine());

app.set('views', __dirname + '/views');

app.set('view engine', 'handlebars');



app.use(express.static(__dirname + '/public'));
app.use('/', viewsRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter)
app.use('/api/productos', productsRouter);
app.use('/api/carrito', cartsRouter)





const httpServer = app.listen(8080, () => { console.log("Servidor levantado") });
const socketServer = new Server(httpServer);

socketServer.on('connection', socket => {
    console.log("Nuevo cliente conectado")
    socket.on('message', data => {
        console.log(data);
    })
})

const environment = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://CoderGodoy:Backend2023*@codercluster.wtridr1.mongodb.net/ecommerce?retryWrites=true&w=majority`,
            (error) => {
                if (error) {
                    console.log("Error al conectar");
                } else {
                    console.log("Conectado a la base de datos");
                }
            }
        )

    } catch (error) {
        console.log(`Error en la conexion ${error}`)

    }
};

environment();

