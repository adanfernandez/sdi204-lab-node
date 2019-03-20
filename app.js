// Módulos
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// Variables
app.set('port', 8081);


//Rutas/controladores por lógica
require("./routes/rusuarios.js")(app); // (app, param1, param2, etc.)
require("./routes/rcanciones.js")(app); // (app, param1, param2, etc.)



// lanzar el servidor
app.listen(app.get('port'), function() {
    console.log("Servidor activo");
});

app.post("/cancion", function(req, res) {
    res.send("Canción agregada:"+req.body.nombre +"<br>"
        +" genero :" +req.body.genero +"<br>"
        +" precio: "+req.body.precio);
});

app.get('/promo*', function (req, res) {
    res.send('Respuesta patrón promo* ');
});
