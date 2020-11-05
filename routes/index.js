import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { 
    res.send('Inicio');
});

router.get('/nosotros', (req, res) => { 
    res.render('nosotros'); // vista
});

export default router;


