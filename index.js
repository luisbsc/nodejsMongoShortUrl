const express = require("express")
const app = express()//! Sevidor !
const morgan = require("morgan")// ! Ver peticiones !
require("dotenv").config() // ! variables de entorno
const {create}=require("express-handlebars")// !plantillas
require("./database/db")// ! base de datos
// * sistema de plantillas de handlebear
// ? para cambiar la extencion de handlebears a .hbs
const hbs =create({
    extname: ".hbs",//! cambiar extencion
    partialsDir: ["views/components"]//!optener partials o parte de codigos html
});
//? indicar cual es el motor de platillas
app.engine(".hbs",hbs.engine);
//? indicar cul es la extencion
app.set("view engine",".hbs");
//? indicar la ruta 
app.set("views","./views");

// * Creacion del servidor
const PORT = process.env.PORT || 5000
app.listen(PORT,()=> console.log("servidor corriendo http://127.0.0.1:5000/ 👌"+PORT)) //! Puerto del servidor !
app.use(morgan("dev"))//! ver peticiones por consola !

// | Middleware |
//? Para poder optener datos por get => 
app.use(express.urlencoded({extended: true})) 
// * Metodos get 
// | urls |
app.use("/",require("./routes/home"))
app.use("/auth",require("./routes/auth"))
// * Archivos estaticos
app.use(express.static(__dirname+"/public"))//! enviar archivos publicos al servidor !





app.get("/pr",(req,res)=>{
    res.render("home")
})











// * Metodo post
// ? Probando el metodo req.body


/* app.post("/pPost",(req,res)=>{
    req.body
    console.log(req.body)
    res.send("Form enviado ❤️")
}) */




