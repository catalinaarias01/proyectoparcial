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
-- Table structure for table `cliente_productos`
--

DROP TABLE IF EXISTS `cliente_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `cliente_productos_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  CONSTRAINT `cliente_productos_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_productos`
--

LOCK TABLES `cliente_productos` WRITE;
/*!40000 ALTER TABLE `cliente_productos` DISABLE KEYS */;
INSERT INTO `cliente_productos` VALUES (0,0,0),(1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,0),(6,6,1),(7,7,2),(8,8,3),(9,9,4),(11,0,5),(12,7,5),(13,0,8),(14,2,8),(15,20,8),(16,14,8),(17,7,8),(18,24,8),(19,24,6),(20,2,6),(21,7,6),(22,6,6),(23,8,6),(24,17,6),(25,1,6),(26,19,7),(27,15,7),(28,24,7),(29,2,7),(30,22,7),(31,5,7),(32,8,7),(33,26,7),(34,22,5),(35,14,5),(36,26,5);
/*!40000 ALTER TABLE `cliente_productos` ENABLE KEYS */;
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
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `producto_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (0,'Wow que lindo me encanta','2021-07-02 02:50:00',2,3),(1,'Pésimo producto, no me gusto nada.','2021-02-01 03:50:55',8,0),(2,'MEJOR PRODUCTO DEL MUNDO','2020-02-08 09:50:55',5,1),(3,'Volvería a comprar','2020-08-15 08:11:05',7,2),(4,'Wow','2021-06-20 23:28:27',6,5),(6,'que lindo','2021-06-21 05:02:05',9,5),(7,'wow','2021-06-21 05:02:19',0,5),(8,'Divino','2021-06-21 05:03:04',0,5),(9,'Me fascina','2021-06-21 05:03:11',2,5),(10,'Quiero todos','2021-06-21 05:03:14',2,5),(11,'medio caross','2021-06-21 05:03:20',2,5),(12,'Esta bueno esstee producto, lo probé y mee gustó','2021-06-21 13:11:40',9,8),(13,'Malisimo','2021-06-21 13:11:47',21,8),(14,'Cara y no lo vale','2021-06-21 13:11:53',5,8),(15,'Muy buenas, lo recomiendo','2021-06-21 13:12:07',0,8),(16,'Están buenas','2021-06-21 13:14:00',26,8),(17,'Me gustaron pero no tanto','2021-06-21 13:14:08',25,8),(18,'Están buenas ','2021-06-21 13:14:20',24,8),(19,'Divinas','2021-06-21 13:14:47',6,8),(20,'Muy buena','2021-06-21 13:15:06',24,6),(21,'Me encantó, creo  que ess mi favorita','2021-06-21 13:15:20',2,6),(22,'Tremendo','2021-06-21 13:15:32',7,6),(23,'Muy bueno muy recomendado','2021-06-21 13:15:43',6,6),(24,'No es muy  buena pero va con mi tono de piel','2021-06-21 13:16:06',8,6),(25,'Literalmente DIVINO','2021-06-21 13:16:32',17,6),(26,'MIRA LO  QUE SON  ESOS COLORES','2021-06-21 13:16:46',1,6),(27,'si si si si si ','2021-06-21 13:17:02',16,6),(28,'muy cute','2021-06-21 13:17:28',19,7),(29,'DDivinos los colores','2021-06-21 13:17:37',20,7),(30,'Ok AMO','2021-06-21 13:17:43',3,7),(31,'AMO AMO AMO AMO','2021-06-21 13:17:54',15,7),(32,'Plis me gusstan mucho','2021-06-21 13:18:55',0,5),(33,'Es muy bueno posta','2021-06-21 13:19:04',14,5),(34,'Mejor producto hasta ahora','2021-06-21 13:19:15',6,5),(35,'Muy ecofriendly, está bueno eso','2021-06-21 13:19:30',26,5);
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
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `usuario_id` int(11) DEFAULT NULL,
  `comentarios_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comentarios_id` (`comentarios_id`),
  KEY `productos_ibfk_1` (`usuario_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE,
  CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`comentarios_id`) REFERENCES `comentarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (0,'Mini Badger Brush Set','• Pincel Spoolie • Shadow Brush  • Eyebrush  • Angle Liner  • Lip Brush - • Blush Brush • Powder Brush • Portacosmeticos','Brochas','Morphe','brochas-morphe.jpg','2021-02-01 03:50:55',NULL,3,0),(1,'Cest La Vie Palette','Paleta de 30 sombras - Cruelty Free','Ojos','Rude Cosmetics','cestlavie-paleta.jpg','2020-03-05 06:56:45',NULL,4,3),(2,'Flawless Finish Foundation','Cremosa, ligera y libre de aceites. Da un acabado semi-matte que dura todo el día. Sirve para todo tipo de piel!','Rostro','e.l.f','flawlessFinishFoundation.jpg','2021-02-01 03:50:55',NULL,0,2),(3,'Ultra Matte Lipstick','Labial formato líquido, de larga duración y cruelty free','Labios','ColourPop','ultraMatteLip.jpg','2021-06-09 06:35:00',NULL,2,1),(4,'Lustre Lipstick','El icónico producto que hizo famoso a M·A·C. Esta fórmula liviana se desliza fácilmente, tiene una cobertura ligera-media y un acabado con semi-brillo.','Labios','MAC','lustreLipstick.jpg','2020-02-08 09:50:55',NULL,1,0),(5,'Poreless Face Primer','Blemish control: Ayuda a controlar los brotes con el uso. Tiene una textura suave y deja un acabado matte en la piel.','rostro','e.l.f','porelessFacePrimer.jpg','2021-02-01 03:50:55',NULL,2,2),(6,'Panoramic Mascara','Esta máscara de pestañas, que agrega volumen instantáneo a tus pestañas, combina un pigmento intensamente negro con ingredientes nutritivos para brindar pestañas espectaculares y saludables en una sola pasada.','Ojos','Laura Mercier','panoramicMascara.jpg','2020-10-03 11:00:43',NULL,3,1),(7,'Powder Brush','Brocha de pelo natural ideal para aplicar rubor o para sellar zonas altas con polvo','Brochas','Coastal Scents','powderBrush.jpg','2020-05-03 10:22:45',NULL,4,3),(8,'Face and Body','Una base líquida liviana y confortable con una combinación única de emolientes con cobertura media en capas y un acabado satinado natural. La fórmula humectante de larga duración se desliza sobre el rostro y el cuerpo con un color que no se desvanece.','Rostro','MAC','faceAndBody.jpg','2021-02-01 10:34:56',NULL,0,0),(9,'Hoola Matte Bronzer','Hoola Matte Bronzer le dará a tu rostro una luminosidad de beso de sol, es ideal para contornear, incluye una suave brocha de cerdas naturales.','rostro','Benefit','hoolaMatteBronzer.jpg','2021-07-02 02:50:00',NULL,1,1),(12,'Base ligera MAC ','Base ligera ideal para el día.','rostro','MAC','img_url-1624279900124.jpeg','2021-06-21 12:51:40','2021-06-21 12:51:40',5,NULL),(13,'Sombras  Nude','Paleta de sombras con más de 20 colores, muy pigmentadas.','rostro','Nude','img_url-1624279954644.jpeg','2021-06-21 12:52:34','2021-06-21 12:52:43',5,NULL),(14,'Rimmel Negro ','Rimmel negro, agrega volumen y dura todo el ddía','ojos','Rimmel','img_url-1624280007666.jpeg','2021-06-21 12:53:27','2021-06-21 12:53:27',5,NULL),(15,'Brochas Anastasia','Brochas para maquillarse, duraderas y suaves, son hipoalergenicas','brochas','Anastasia','img_url-1624280070277.jpeg','2021-06-21 12:54:30','2021-06-21 12:54:30',6,NULL),(16,'Base Bobbi Brown','Base para la cara, espesa ideal para la noche','rostro','Bobbi Brown','img_url-1624280096130.jpeg','2021-06-21 12:54:56','2021-06-21 12:54:56',6,NULL),(17,'Labial rosa oscuro','Labial de Hermes, no se corre y no se mancha, dura todo el día','labios','Hermes','img_url-1624280140797.jpeg','2021-06-21 12:55:40','2021-06-21 12:55:40',6,NULL),(18,'Base Milk','Base Milk hecha de productos orgánicos, ayudas al medioambiente y te ves linda mientras lo hacés.','rostro','Milk','img_url-1624280247622.webp','2021-06-21 12:57:27','2021-06-21 12:57:27',7,NULL),(19,'Brochas rosa viejo','Set de brochas rosas, son suaves y no  raspan al maquillarse, y vienen en un paquetito rosa re lindo.','brochas','BH','img_url-1624280308519.jpeg','2021-06-21 12:58:28','2021-06-21 12:58:28',7,NULL),(20,'Sombras marrones','Paleta de sombras marrones con más dde quince colores, ideals para el día o para la noche y son super pigmentadas','ojos','Flormar','img_url-1624280366476.jpeg','2021-06-21 12:59:26','2021-06-21 12:59:26',7,NULL),(21,'Basse Maybelline Clara','Base ligera y clara para una tez más blanca, no dura todo el día pero es ligera','rostro','Maybelline','img_url-1624280408153.jpg','2021-06-21 13:00:08','2021-06-21 13:00:08',7,NULL),(22,'Base NYX','Base NYX más pesada e ideal para durarte toda la noche','rostro','NYX','img_url-1624280682143.jpeg','2021-06-21 13:04:42','2021-06-21 13:04:42',8,NULL),(23,'Labial rosita claro','Labial que no se corre, es a  prueba de agua y te va a durar todo el día intacto. ','labios','Velvet','img_url-1624280734667.jpeg','2021-06-21 13:05:34','2021-06-21 13:05:34',8,NULL),(24,'Base Clinque','Base espesa, duradera, hipoalergenica y de excelente calidad. Vale cada peso que inviertass.','rostro','Clinque','img_url-1624280802890.jpeg','2021-06-21 13:06:42','2021-06-21 13:06:42',8,NULL),(25,'Paleta de  rosas','Paleta de sombras rosas y marrones, vienen más de veinte colores y son extremadamente pigmentadass con colores muy vivos','ojos','Nars','img_url-1624280845639.jpeg','2021-06-21 13:07:25','2021-06-21 13:07:25',8,NULL),(26,'Brochas ECO','Brochas creadas de productos reciclados, excelente calidad y no contaminas','brochas','Eco','img_url-1624280885013.jpeg','2021-06-21 13:08:05','2021-06-21 13:08:05',8,NULL);
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
  `edad` tinyint(4) NOT NULL,
  `contraseña` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `img_usuario` varchar(100) DEFAULT NULL,
  `fecha_nacimiento` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (0,'Juan','Perez','jperez@gmail.com','juanperez',22,'perrosygatos1','2020-10-03 00:00:00',NULL,'justinusuario.jpeg','0000-00-00'),(1,'Cata','Quian','cataquian@gmail.com','cataquian',18,'soycatita1','2021-02-06 04:01:20',NULL,'dua.jpeg','0000-00-00'),(2,'Felicitas','Rattagan','felirat@gmail.com','felirat',20,'soyfeli101','2020-06-06 10:55:00',NULL,'users4.jpeg','0000-00-00'),(3,'Maria','Pena','meripe@gmail.com','meripena',30,'223343','2021-02-01 03:50:55',NULL,'users2.jpeg','0000-00-00'),(4,'Ignacio','Corcuera','nachocorcu@gmail.com','nachito123',25,'nachitocorcu','2020-02-20 04:13:32',NULL,'users9.jpeg','0000-00-00'),(5,'Maria','Peña','mariapenafd@gmail.com','mariapena',20,'$2a$10$Rvpd5OwsmwFGyLzzoYgm9OyuALrIGPqR9Fv81LYnNv1HU6IhwZvVG','2021-06-20 20:44:24','2021-06-20 20:44:24','img_usuario-1624248962049.JPG','2001-02-01'),(6,'Cata','Tripodi','catalina@tripodi.com.ar','catatripodi',20,'$2a$10$FlR2yR.Z57KASFQhuG2lN.x63vtgeZ9C31itUK9VYLqOAkOdEksLa','2021-06-21 04:05:16','2021-06-21 04:05:16','perfil.jpeg','2021-06-03'),(7,'Sofia','Ojea','sofiojea@gmail.com','sofiojea',20,'$2a$10$PkPOHn5pG5QdVZ0RCgeY9OKIzhKOQ7xdcbCAaCqG2z0FwD6/.jUcq','2021-06-21 12:56:23','2021-06-21 12:56:23','img_usuario-1624280595186.jpeg','2005-02-12'),(8,'Guada','Arana','guadaarana@gmail.com','guadaarana',19,'$2a$10$nZ4JljeGvLzvN8UgeF7hVucaZ38onErD4YWWGORmMvCqxaHhIR.R.','2021-06-21 13:04:08','2021-06-21 13:04:08','img_usuario-1624281042476.jpeg','2002-06-20');
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

-- Dump completed on 2021-06-21 10:25:58
