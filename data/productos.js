//Acá debería haber un array con varios objetos (producto1: nombre, descripción, link a imagen)
const comentarios = require('./comentarios');


const productos = [
    {
        id:0,
        nombre:"Mini Badger Brush Set",
        descripcion: "• Pincel Spoolie • Shadow Brush  • Eyebrush  • Angle Liner  • Lip Brush - • Blush Brush • Powder Brush • Portacosmeticos",
        seccion: "Brochas",
        marca: "Morphe",
        img:"/images/products/brochas-morphe.jpg",
        comentarios : [
            {
                texto:comentarios[0],
                usuario: comentarios[0],
            },
            {
                texto:comentarios[1],
                usuario: comentarios[2]
            },
        ]
    },
        
        
    {
        id:1,
        nombre:"Cest La Vie Palette",
        descripcion: "Paleta de 30 sombras - Cruelty Free",
        seccion: "Ojos",
        marca: "Rude Cosmetics",
        img:"/images/products/cestlavie-paleta.jpg",
        comentarios : [comentarios[3], comentarios[4], comentarios[5]]
    },
    {
        id:2,
        nombre:"Flawless Finish Foundation",
        descripcion: "Cremosa, ligera y libre de aceites. Da un acabado semi-matte que dura todo el día. Sirve para todo tipo de piel!",
        seccion: "Rostro",
        marca: "e.l.f",
        img:"/images/products/flawlessFinishFoundation.jpg",
        comentarios : [comentarios[6], comentarios[7], comentarios[8]]
    },
    {
        id:3,
        nombre:"Ultra Matte Lipstick",
        descripcion: "Labial formato líquido, de larga duración y cruelty free",
        seccion: "Labios",
        marca: "ColourPop",
        img: "/images/products/ultraMatteLip.jpg",
        comentarios : [comentarios[9], comentarios[10], comentarios[0]]
    },
    {
        id:4,
        nombre:"Lustre Lipstick",
        descripcion: "El icónico producto que hizo famoso a M·A·C. Esta fórmula liviana se desliza fácilmente, tiene una cobertura ligera-media y un acabado con semi-brillo.",
        seccion: "Labios",
        marca: "MAC",
        img:"/images/products/lustreLipstick.jpg",
        comentarios : [comentarios[1], comentarios[2], comentarios[3]]
    },
    {
        id:5,
        nombre: "Poreless Face Primer",
        descripcion: "Blemish control: Ayuda a controlar los brotes con el uso. Tiene una textura suave y deja un acabado matte en la piel.",
        seccion: "Rostro",
        marca: "e.l.f",
        img: "/images/products/porelessFacePrimer.jpg",
        comentarios :[comentarios[4], comentarios[5], comentarios[6]]
    },
    {
        id:6,
        nombre: "Panoramic Mascara",
        descripcion: "Esta máscara de pestañas, que agrega volumen instantáneo a tus pestañas, combina un pigmento intensamente negro con ingredientes nutritivos para brindar pestañas espectaculares y saludables en una sola pasada.",
        seccion: "Ojos",
        marca: "Laura Mercier",
        img: "/images/products/panoramicMascara.jpg",
        comentarios : [comentarios[7], comentarios[8], comentarios[10]]
    },
    {
        id:7,
        nombre: "Powder Brush",
        descripcion: "Brocha de pelo natural ideal para aplicar rubor o para sellar zonas altas con polvo",
        seccion: "Brochas",
        marca: "Coastal Scents",
        img: "/images/products/powderBrush.jpg",
        comentarios : [comentarios[1], comentarios[2], comentarios[3]]
    },
    {
       id:8,
       nombre: "Face and Body",
       descripcion: "Una base líquida liviana y confortable con una combinación única de emolientes con cobertura media en capas y un acabado satinado natural. La fórmula humectante de larga duración se desliza sobre el rostro y el cuerpo con un color que no se desvanece.",
       seccion: "Rostro",
       marca: "MAC",
       img: "/images/products/faceAndBody.jpg",
       comentarios : [comentarios[4], comentarios[5], comentarios[6]]
    },
    {
        id:9,
        nombre: "Hoola Matte Bronzer",
        descripcion: "Hoola Matte Bronzer le dará a tu rostro una luminosidad de beso de sol, es ideal para contornear, incluye una suave brocha de cerdas naturales.",
        seccion: "Rostro",
        marca: "Benefit",
        img: "/images/products/hoolaMatteBronzer.jpg",
        comentarios :[comentarios[7], comentarios[8], comentarios[9]]
    },
    {
        id:10,
        nombre: "Mattemoiselle Plush Lipstick",
        descripcion: "Un lápiz labial ultra-delgado con un acabado mate suave como un pétalo y de larga duración, creado en una gama de 14 tonos desde ligeros, hasta intensos, cada uno diseñado para favorecer todos los tonos de la piel.",
        seccion: "Labios",
        marca: "Fenty Beauty",
        img: "/images/products/mattemoisellePlush.jpg",
        comentarios : [comentarios[10], comentarios[2], comentarios[3]]
    },
    {
        id:11,
        nombre:"James Charles Palette",
        descripcion:"Paleta de 39 sombras Mixtas, Tamaño 28 x 20 Cm",
        seccion: "Ojos",
        marca: "Morphe",
        img: "/images/products/jamesCharlesPalette.jpg",
        comentarios : [comentarios[4], comentarios[5], comentarios[7]]
    }
]

module.exports = productos;