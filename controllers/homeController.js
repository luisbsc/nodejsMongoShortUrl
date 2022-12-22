const Url = require("../models/Url");
//import { nanoid } from 'nanoid';
const { nanoid } = require('nanoid')

const leerUrls = async (req, res) => {
    /*     const urls = [
            { origin: "www.google.com", shortURL: "xdxdxxd1" },
            { origin: "www.facebook.com", shortURL: "xdxdxxd2" },
            { origin: "www.twuter.com", shortURL: "xdxdxxd3" }
        ] */
    try {
        urls = await Url.find().lean()
        res.render("home", { urls: urls });// ! renderisar la pagina con los datos enviados por dicionarios
    } catch (error) {
        console.log(error)
        res.send("fallo algo")
    }
    //res.send("Estas solicitando la ruta raiz😁")
    //res.render("index.ejs")
}
const agregarUrl = async (req, res) => {
    console.log(req.body)
    const { origin } = req.body
    try {
        const url = new Url({ origin: origin, shortURL: nanoid(6) })
        console.log(url)
        await url.save()
        res.redirect("/")
    } catch (error) {
        console.log(error)
        res.send("error algo fallo")
    }
}

const eliminarUrl = async (req, res) => {
    const { id } = req.params

    try {

        await Url.findByIdAndDelete(id)
        res.redirect("/")

    } catch (error) {
        console.log(error)
    }
}

const editarUrlForm = async (req, res) => {
    const { id } = req.params;
    try {
        const url = await Url.findById(id).lean();
        pru = [url]
        console.log(url)
        res.render('home', { url, urls: pru });
    } catch (error) {
        console.log(error)
        res.render("algo salio mal")
    }
}
const editarUrl = async (req, res) => {
    const { id } = req.params;
    const {origin}= req.body;
    try {
        await Url.findByIdAndUpdate(id,{origin:origin})
        res.redirect("/")
    } catch (error) {
        console.log(error)
        res.render("algo salio mal")
    }

}
const redireccionamineto=async(req,res)=>{
    const{shortUrl}=req.params;
    try {
        const urlDB= await Url.findOne({shortURL:shortUrl})
        res.redirect(urlDB.origin)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    leerUrls,
    agregarUrl,
    eliminarUrl,
    editarUrlForm,
    editarUrl,
    redireccionamineto,
}