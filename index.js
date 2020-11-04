const express = require('express'); // Importamos express y lo asignamos

const app = express(); // Función para ejecutar expres, que también asignamos

const port = process.env.PORT || 4000;

app.listen(port, ()=>{ 
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
}) // Inicia el servidor con app, y utiliza el método listen; listen indica el puerto y con un callback ejecuta un msj



