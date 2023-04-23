const express = require("express");
const app = express();
const cartRouter = require('./routes/cart.routes');
const productRouter = require('./routes/products.routes');
const handlebars = require('express-handlebars');
const { Server } = require('socket.io');
const viewsRouter = require('./routes/views.routes');
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const loginRouter = require('./routes/login.routes');
const userRoutes = require('./routes/users.routes');
const signUpRouter = require('./routes/register.routes');
const profileRouter = require('./routes/profile.routes');
const passport = require('passport');
const initializePassport = require('../src/config/passport.config');
const session = require('express-session');
const sessionsRouter = require('./routes/sessions.routes');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const config = require('../src/config/config');
const mockingRouter = require('./routes/mockingProducts.routes');
const errorHandler = require('./middlewares/errors/error');
console.log(config)
mongoose.set('strictQuery', true)

dotenv.config();



app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');


app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://CoderGodoy:Backend2023*@codercluster.wtridr1.mongodb.net/ecommerce?retryWrites=true&w=majority`,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 10000,
    }),
    secret: "CoderSecrets",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());




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
initializePassport();


app.use('/', viewsRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/signin', userRoutes);
app.use('/login', loginRouter);
app.use('/signup', userRoutes);
app.use('/profile', profileRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/', mockingRouter);
app.use(errorHandler);