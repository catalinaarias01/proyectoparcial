CREATE DATABASE  IF NOT EXISTS `proyectoparcial` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `proyectoparcial`;
-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: proyectoparcial
-- ------------------------------------------------------
-- Server version	5.7.32



/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente_producto`
--

DROP TABLE IF EXISTS `cliente_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente_producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `cliente_producto_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  CONSTRAINT `cliente_producto_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_producto`
--

LOCK TABLES `cliente_producto` WRITE;
/*!40000 ALTER TABLE `cliente_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `texto` varchar(50) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `producto_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (0,'Wow que lindo me encanta','2021-07-02 02:50:00',2,3),(1,'Pésimo producto, no me gusto nada.','2021-02-01 03:50:55',8,0),(2,'MEJOR PRODUCTO DEL MUNDO','2020-02-08 09:50:55',5,1),(3,'Volvería a comprar','2020-08-15 08:11:05',7,2);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(50) DEFAULT NULL,
  `descripcion` text,
  `seccion` varchar(50) DEFAULT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `img_url` varchar(200) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `comentarios_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comentarios_id` (`comentarios_id`),
  KEY `productos_ibfk_1` (`usuario_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`comentarios_id`) REFERENCES `comentarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (0,'Mini Badger Brush Set','• Pincel Spoolie • Shadow Brush  • Eyebrush  • Angle Liner  • Lip Brush - • Blush Brush • Powder Brush • Portacosmeticos','Brochas','Morphe','/images/products/brochas-morphe.jpg','2021-02-01 03:50:55',3,0),(1,'Cest La Vie Palette','Paleta de 30 sombras - Cruelty Free','Ojos','Rude Cosmetics','/images/products/cestlavie-paleta.jpg','2020-03-05 06:56:45',4,3),(2,'Flawless Finish Foundation','Cremosa, ligera y libre de aceites. Da un acabado semi-matte que dura todo el día. Sirve para todo tipo de piel!','Rostro','e.l.f','/images/products/flawlessFinishFoundation.jpg','2021-02-01 03:50:55',0,2),(3,'Ultra Matte Lipstick','Labial formato líquido, de larga duración y cruelty free','Labios','ColourPop','/images/products/ultraMatteLip.jpg','2021-06-09 06:35:00',2,1),(4,'Lustre Lipstick','El icónico producto que hizo famoso a M·A·C. Esta fórmula liviana se desliza fácilmente, tiene una cobertura ligera-media y un acabado con semi-brillo.','Labios','MAC','/images/products/lustreLipstick.jpg','2020-02-08 09:50:55',1,0),(5,'Poreless Face Primer','Blemish control: Ayuda a controlar los brotes con el uso. Tiene una textura suave y deja un acabado matte en la piel.','rostro','e.l.f','/images/products/porelessFacePrimer.jpg','2021-02-01 03:50:55',2,2),(6,'Panoramic Mascara','Esta máscara de pestañas, que agrega volumen instantáneo a tus pestañas, combina un pigmento intensamente negro con ingredientes nutritivos para brindar pestañas espectaculares y saludables en una sola pasada.','Ojos','Laura Mercier','/images/products/panoramicMascara.jpg','2020-10-03 11:00:43',3,1),(7,'Powder Brush','Brocha de pelo natural ideal para aplicar rubor o para sellar zonas altas con polvo','Brochas','Coastal Scents','/images/products/powderBrush.jpg','2020-05-03 10:22:45',4,3),(8,'Face and Body','Una base líquida liviana y confortable con una combinación única de emolientes con cobertura media en capas y un acabado satinado natural. La fórmula humectante de larga duración se desliza sobre el rostro y el cuerpo con un color que no se desvanece.','Rostro','MAC','/images/products/faceAndBody.jpg','2021-02-01 10:34:56',0,0),(9,'Hoola Matte Bronzer','Hoola Matte Bronzer le dará a tu rostro una luminosidad de beso de sol, es ideal para contornear, incluye una suave brocha de cerdas naturales.','rostro','Benefit','/images/products/hoolaMatteBronzer.jpg','2021-07-02 02:50:00',1,1);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `edad` tinyint(4) DEFAULT NULL,
  `contraseña` varchar(200) DEFAULT NULL,
  `fecha_creación` datetime NOT NULL,
  `img_usuario` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (0,'Juan','Perez','jperez@gmail.com','juanperez',22,'perrosygatos1','2020-10-03 00:00:00','/images/users/justinusuario.jpeg'),(1,'Cata','Quian','cataquian@gmail.com','cataquian',18,'soycatita1','2021-02-06 04:01:20','/images/users/dua.jpeg'),(2,'Felicitas','Rattagan','felirat@gmail.com','felirat',20,'soyfeli101','2020-06-06 10:55:00','/images/users/users4.jpeg'),(3,'Maria','Pena','meripe@gmail.com','meripena',30,'223343','2021-02-01 03:50:55','/images/users/users2.jpeg'),(4,'Ignacio','Corcuera','nachocorcu@gmail.com','nachito123',25,'nachitocorcu','2020-02-20 04:13:32','/img/users/users9.jpeg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-14 14:24:20
