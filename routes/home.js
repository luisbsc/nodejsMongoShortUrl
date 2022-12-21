const express =require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    const urls =[
        {origin:"www.google.com",shortURL:"xdxdxxd1"},
        {origin:"www.facebook.com",shortURL:"xdxdxxd2"},
        {origin:"www.twuter.com",shortURL:"xdxdxxd3"}
    ]
    res.render("home",{urls:urls});// ! renderisar la pagina con los datos enviados por dicionarios
    //res.send("Estas solicitando la ruta raiz😁")
    //res.render("index.ejs")
})

module.exports= router