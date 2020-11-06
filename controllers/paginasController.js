import {Viaje} from '../models/Viaje.js'

const paginaInicio = (req, res) => { 
    res.render('inicio', { 
        pagina: 'Inicio'
    });
}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', { 
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => { 
    
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', { 
        pagina: 'Próximos viajes',
        viajes, // viajes: viajes,
    });
}

const paginaTestimoniales = (req, res) => { 
    res.render('testimoniales', { 
        pagina: 'Testimoniales'
    });
}

const paginaDetalleViaje = async (req, res) => { //Muestra un viaje por su slug
    // console.log(req.params);
    const { slug } = req.params;

    try{
        const viaje = await Viaje.findOne({ where : { slug } });
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}


