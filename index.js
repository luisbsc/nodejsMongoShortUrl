const express = require("express")
const app = express()//! Sevidor !
const morgan = require("morgan")// ! Ver peticiones !
const {create}=require("express-handlebars")

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
app.listen(3001,()=> console.log("servidor corriendo http://127.0.0.1:3001/ 👌")) //! Puerto del servidor !
app.use(morgan("dev"))//! ver peticiones por consola !

// * Archivos estaticos
// | Middleware |

//? Para poder optener datos por get => 
app.use(express.urlencoded({extended: true})) 
// * Metodos get 
// | Inicio |

app.use("/",require("./routes/home"))
app.use("/auth",require("./routes/auth"))
app.use(express.static(__dirname+"/public"))//! enviar archivos publicos al servidor !

















// * Metodo post
// ? Probando el metodo req.body


/* app.post("/pPost",(req,res)=>{
    req.body
    console.log(req.body)
    res.send("Form enviado ❤️")
}) */




