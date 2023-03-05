const express = require("express");
const app = express();
const cartRouter = require('./routes/cartRouter');
const productRouter = require('./routes/productRouter');
const handlebars = require('express-handlebars');
const { Server } = require('socket.io');
const viewsRouter = require('./routes/views.router');
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const loginRouter = require ('./routes/login.routes');
const signUpRouter = require ('./routes/signUp.routes');
const profileRouter = require ('./routes/profile.routes');

mongoose.set('strictQuery', true)

dotenv.config();



app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');



app.use(express.static(__dirname + '/public'));
app.use('/', viewsRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/login', loginRouter);
app.use('/signUp', signUpRouter);
app.use('/profile', profileRouter)



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

