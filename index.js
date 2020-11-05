import express from 'express';
import router from './routes/index.js';


const app = express();

const port = process.env.PORT || 4000;

app.set('view engine', 'pug') // Habilitar PUG

app.use(express.static('public')); // Define la carp. public

app.use('/', router); // Agrega el router

app.listen(port, ()=>{ 
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
})


