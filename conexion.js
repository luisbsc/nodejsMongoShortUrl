const mongoose = require("mongoose")

uri = "mongodb+srv://itsLuis:itsAdmin@cluster0.44ul8pm.mongodb.net/dbluis"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos de mongodb'))
    .catch(e => console.log('error de conexión', e))




