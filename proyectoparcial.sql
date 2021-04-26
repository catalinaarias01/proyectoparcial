SELECT * FROM universidad.departamento;

CREATE SCHEMA proyectoparcial;

USE proyectoparcial;

CREATE TABLE usuarios (
	id INT PRIMARY KEY NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR (50) NOT NULL,
    mail VARCHAR (50) NOT NULL,
    nombre_usuario VARCHAR(50) NOT NULL,
    edad TINYINT,
    contraseña VARCHAR(50)
);

CREATE TABLE productos  (
	id INT PRIMARY KEY NOT NULL,
    nombre_producto VARCHAR(50) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    seccion VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    img_url VARCHAR(50) NOT NULL,
    fecha_creacion DATETIME NOT NULL
);

CREATE TABLE comentarios (
	id INT PRIMARY KEY NOT NULL,
    texto VARCHAR(50) NOT NULL,
    fecha_creacion DATETIME NOT NULL
);

CREATE TABLE cliente_producto (
	id INT PRIMARY KEY NOT NULL
);


/*Adding foreign keys a comentarios*/
ALTER TABLE comentarios
ADD producto_id INT NOT NULL;

ALTER TABLE comentarios
ADD FOREIGN KEY (producto_id) REFERENCES productos(id);

ALTER TABLE comentarios
ADD usuario_id INT NOT NULL;

ALTER TABLE comentarios
ADD FOREIGN KEY (usuario_id) REFERENCES usuarios(id);

/*Adding foreign keys a cliente_producto*/
ALTER TABLE cliente_producto
ADD producto_id INT NOT NULL;

ALTER TABLE cliente_producto
ADD FOREIGN KEY (producto_id) REFERENCES productos(id);

ALTER TABLE cliente_producto
ADD usuario_id INT NOT NULL;

ALTER TABLE cliente_producto
ADD FOREIGN KEY (usuario_id) REFERENCES usuarios(id);

/*Adding foreign keys a productos*/
ALTER TABLE productos
MODIFY descripcion TEXT NOT NULL;

ALTER TABLE productos
MODIFY img_url VARCHAR(200) NOT NULL;

ALTER TABLE productos
ADD usuario_id INT NOT NULL;

ALTER TABLE productos
ADD FOREIGN KEY (usuario_id) REFERENCES usuarios(id);

ALTER TABLE productos
ADD comentarios_id INT NOT NULL;

ALTER TABLE productos
ADD FOREIGN KEY (comentarios_id) REFERENCES comentarios(id);

/*Agregar campo fecha a usuarios*/
ALTER TABLE usuarios
ADD fecha_creación DATETIME NOT NULL;

/*insertar 5 valores a usuarios*/
INSERT INTO usuarios
VALUES (0, 'Juan', 'Perez', 'jperez@gmail.com', 'juanperez', 22, 'perrosygatos1', '2020-10-3 00:00:00');

INSERT INTO usuarios
VALUES (1, 'Cata', 'Quian', 'cataquian@gmail.com', 'cataquian', 18, 'soycatita1', '2021-2-6 04:01:20');

INSERT INTO usuarios
VALUES (2, 'Felicitas', 'Rattagan', 'felirat@gmail.com', 'felirat', 20, 'soyfeli101', '2020-6-6 10:55:00');

INSERT INTO usuarios
VALUES (3, 'Maria', 'Pena', 'meripe@gmail.com', 'meripena', 30, '223343', '2021-2-1 03:50:55');

INSERT INTO usuarios
VALUES (4, 'Ignacio', 'Corcuera', 'nachocorcu@gmail.com', 'nachito123', 25, 'nachitocorcu', '2020-2-20 04:13:32');

/*Alterar tabla de productos, puede no tener comentarios*/
ALTER TABLE productos
MODIFY comentarios_id INT;


/*insertar 10 valores a productos*/

INSERT INTO productos (id, nombre_producto, descripcion, seccion, marca, img_url, fecha_creacion, usuario_id)
VALUES (0, 'Mini Badger Brush Set', '• Pincel Spoolie • Shadow Brush  • Eyebrush  • Angle Liner  • Lip Brush - • Blush Brush • Powder Brush • Portacosmeticos', 
'Brochas', 'Morphe', '/images/products/brochas-morphe.jpg', '2021-2-1 03:50:55' , 3);

INSERT INTO productos (id, nombre_producto, descripcion, seccion, marca, img_url, fecha_creacion, usuario_id)
VALUES (1, 'Cest La Vie Palette', 'Paleta de 30 sombras - Cruelty Free', 
'Ojos', 'Rude Cosmetics', 'images/products/cestlavie-paleta.jpg', '2020-3-5 06:56:45' , 4);

INSERT INTO productos (id, nombre_producto, descripcion, seccion, marca, img_url, fecha_creacion, usuario_id)
VALUES (2, 'Flawless Finish Foundation','Cremosa, ligera y libre de aceites. Da un acabado semi-matte que dura todo el día. Sirve para todo tipo de piel!',
'Rostro', 'e.l.f', 'images/products/flawlessFinishFoundation.jpg', '2021-2-1 03:50:55' , 0);

INSERT INTO productos (id, nombre_producto, descripcion, seccion, marca, img_url, fecha_creacion, usuario_id)
VALUES (3, 'Ultra Matte Lipstick', 'Labial formato líquido, de larga duración y cruelty free', 
'Labios', 'ColourPop', '/images/products/ultraMatteLip.jpg', '2021-6-9 06:35:00' , 2);

INSERT INTO productos (id, nombre_producto, descripcion, seccion, marca, img_url, fecha_creacion, usuario_id)
VALUES (4, 'Lustre Lipstick', 'El icónico producto que hizo famoso a M·A·C. Esta fórmula liviana se desliza fácilmente, tiene una cobertura ligera-media y un acabado con semi-brillo.', 
'Labios', 'MAC', 'images/products/lustreLipstick.jpg', '2020-2-8 09:50:55' , 1);

INSERT INTO productos (id, nombre_producto, descripcion, seccion, marca, img_url, fecha_creacion, usuario_id)
VALUES (5, 'Poreless Face Primer', 'Blemish control: Ayuda a controlar los brotes con el uso. Tiene una textura suave y deja un acabado matte en la piel.', 
'Rostro', 'e.l.f', '/images/products/porelessFacePrimer.jpg', '2021-2-1 03:50:55' , 2);

INSERT INTO productos (id, nombre_producto, descripcion, seccion, marca, img_url, fecha_creacion, usuario_id)
VALUES (6, 'Panoramic Mascara', 'Esta máscara de pestañas, que agrega volumen instantáneo a tus pestañas, combina un pigmento intensamente negro con ingredientes nutritivos para brindar pestañas espectaculares y saludables en una sola pasada.', 
'Ojos', 'Laura Mercier', '/images/products/panoramicMascara.jpg', '2020-10-3 11:00:43' , 3);

INSERT INTO productos (id, nombre_producto, descripcion, seccion, marca, img_url, fecha_creacion, usuario_id)
VALUES (7, 'Powder Brush', 'Brocha de pelo natural ideal para aplicar rubor o para sellar zonas altas con polvo', 
'Brochas', 'Coastal Scents', '/images/products/powderBrush.jpg', '2020-5-3 10:22:45' , 4);

INSERT INTO productos (id, nombre_producto, descripcion, seccion, marca, img_url, fecha_creacion, usuario_id)
VALUES (8, 'Face and Body', 'Una base líquida liviana y confortable con una combinación única de emolientes con cobertura media en capas y un acabado satinado natural. La fórmula humectante de larga duración se desliza sobre el rostro y el cuerpo con un color que no se desvanece.', 
'Rostro', 'MAC', 'images/products/faceAndBody.jpg', '2021-2-1 10:34:56' , 0);

INSERT INTO productos (id, nombre_producto, descripcion, seccion, marca, img_url, fecha_creacion, usuario_id)
VALUES (9, 'Hoola Matte Bronzer', 'Hoola Matte Bronzer le dará a tu rostro una luminosidad de beso de sol, es ideal para contornear, incluye una suave brocha de cerdas naturales.', 
'Rostro', 'Benefit', '/images/products/hoolaMatteBronzer.jpg', '2021-7-2 02:50:00' , 1);



/*insertar 4 valores a comentarios*/

INSERT INTO comentarios
VALUES (0, 'Wow que lindo me encanta', '2021-7-2 02:50:00', 2, 3);

INSERT INTO comentarios
VALUES (1, 'Pésimo producto, no me gusto nada.', '2021-2-1 03:50:55', 8, 0);

INSERT INTO comentarios
VALUES (2, 'MEJOR PRODUCTO DEL MUNDO', '2020-2-8 09:50:55', 5, 1);

INSERT INTO comentarios
VALUES (3, 'Volvería a comprar', '2020-8-15 08:11:05', 7, 2);


/*insertar comentarios a productos*/
UPDATE productos 
SET comentarios_id = 0  
WHERE id=0;

UPDATE productos 
SET comentarios_id = 3
WHERE id=1;

UPDATE productos 
SET comentarios_id = 2
WHERE id=2;

UPDATE productos 
SET comentarios_id = 1
WHERE id=3;

UPDATE productos 
SET comentarios_id = 0
WHERE id=4;

UPDATE productos 
SET comentarios_id = 2
WHERE id=5;

UPDATE productos 
SET comentarios_id = 1
WHERE id=6;

UPDATE productos 
SET comentarios_id = 3
WHERE id=7;

UPDATE productos 
SET comentarios_id = 0
WHERE id=8;

UPDATE productos 
SET comentarios_id = 1
WHERE id=9;


