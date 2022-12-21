const express = require("express")

const router = express.Router()

router.get("/login", (req, res) => {
    res.render("login")
    //res.send("Estas solicitando la ruta raiz😁")
    //res.render("index.ejs")
});


module.exports = router


router.get("/login", (req, res) => {
    res.render("login")
    //res.send("Estas solicitando la ruta raiz😁")
    //res.render("index.ejs")
});
