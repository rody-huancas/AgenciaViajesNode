import { Viaje } from "../models/Viaje.js";

// req -> lo que enviamos, res-> lo que express nos responde
const paginaInicio = (req, res) => {
    res.render("inicio", {
        pagina: "Inicio",
    });
};

const paginaNosotros = (req, res) => {
    res.render("nosotros", {
        pagina: "Nosotros",
    });
};

const paginaViajes = async (req, res) => {
    // consultar bd
    const viajes = await Viaje.findAll();

    res.render("viajes", {
        pagina: "Próximos Viajes",
        viajes,
    });
};

const paginaTestimoniales = (req, res) => {
    res.render("testimoniales", {
        pagina: "Testimoniales",
    });
};

// muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne({ where: { slug } });
        res.render('viaje', {
            pagina: 'Información viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
};
