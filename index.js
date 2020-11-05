
// ------------------------------------ Importamos express y lo asignamos
// const express = require('express'); // commonjs
import express from 'express'; // Imports > module 

const app = express(); // Función para ejecutar expres, que también asignamos

const port = process.env.PORT || 4000;

app.get('/', (req, res) => { // req: lo que enviamos | res: lo que express nos responde

    // res.send('Un villano que acabará con la paz mundial!');

    // res.json({
    //     id:1
    // });

    // res.render();

    res.send('Inicio');
});

app.get('/nosotros', (req, res) => { 
    res.send('Nosotros');
});

app.get('/contacto', (req, res) => { 
    res.send('Contacto');
});

app.listen(port, ()=>{ 
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
}) // Inicia el servidor con app, y utiliza el método listen; listen indica el puerto y con un callback ejecuta un msj



