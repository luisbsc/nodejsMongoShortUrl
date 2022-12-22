const express =require("express");
const { leerUrls, agregarUrl, eliminarUrl,editarUrlForm,editarUrl,redireccionamineto } = require("../controllers/homeController");
const urlvalidar = require("../middlewares/urlValida");
const router = express.Router();

router.get("/",leerUrls)
router.post("/",urlvalidar,agregarUrl)
router.get("/eliminar/:id", eliminarUrl)
router.get("/editar/:id", editarUrlForm)
router.post("/editar/:id",urlvalidar,editarUrl)
router.get("/:shortUrl",redireccionamineto)

module.exports= router