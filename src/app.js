const express = require("express");
const app = express();
const cartRouter = require ('./routers/cartRouter');
const productRouter = require ('./routers/productRouter');
const handlebars = require ('express-handlebars');
const { Server } = require ('socket.io');
const viewsRouter = require ('./routers/views.router')



app.engine('handlebars',handlebars.engine());

app.set('views',__dirname + '/views');

app.set('view engine','handlebars');



app.use(express.static(__dirname+'/public'));
app.use('/',viewsRouter);
app.use (express.json());
app.use (express.urlencoded({extended:true}));
app.use ('/api/products', productRouter);
app.use ('/api/carts',cartRouter)





const httpServer = app.listen(8080, () => { console.log("Servidor levantado") });
const socketServer = new Server(httpServer);

socketServer.on('connection',socket=>{
    console.log("Nuevo cliente conectado")
    socket.on('message',data=>{
        console.log(data);
    })
})


