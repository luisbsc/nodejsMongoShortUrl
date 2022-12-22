const mongoose = require("mongoose")

uri= process.env.URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos de mongodb 🔥'))
    .catch(e => console.log('error de conexión', e))
