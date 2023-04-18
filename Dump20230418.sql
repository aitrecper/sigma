CREATE DATABASE  IF NOT EXISTS `sigma` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sigma`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: sigma
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `animales`
--

DROP TABLE IF EXISTS `animales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animales` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `IMAGEN` varchar(50) DEFAULT NULL,
  `JAULA` varchar(50) DEFAULT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `GENERO` varchar(10) DEFAULT NULL,
  `EDAD` float DEFAULT NULL,
  `RAZA` varchar(50) DEFAULT NULL,
  `TIPO_ANIMAL` enum('Gato','Perro','Conejo') DEFAULT NULL,
  `CHIP` varchar(50) DEFAULT NULL,
  `PASAPORTE` varchar(50) DEFAULT NULL,
  `SALUD` bit(1) DEFAULT NULL,
  `HISTORIAL_VETE` bit(1) DEFAULT NULL,
  `GATO` bit(1) DEFAULT NULL,
  `PERRO` bit(1) DEFAULT NULL,
  `NIÑOS` bit(1) DEFAULT NULL,
  `FECHA_LLEGADA` date DEFAULT NULL,
  `ADOPTADO` bit(1) DEFAULT NULL,
  `FECHA_ADOPCION` date DEFAULT NULL,
  `PPP` bit(1) DEFAULT NULL,
  `ESTERILIZADO` bit(1) DEFAULT NULL,
  `COMPARTIR_JAULA` bit(1) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animales`
--

LOCK TABLES `animales` WRITE;
/*!40000 ALTER TABLE `animales` DISABLE KEYS */;
INSERT INTO `animales` VALUES (1,NULL,'1','Dalia','Hembra',1,'American','Perro','1234','1234',_binary '',_binary '',_binary '',_binary '',_binary '\0','2022-02-01',_binary '','2022-03-01',_binary '',_binary '',_binary ''),(2,NULL,'1','Sirius Black','Macho',0.3,'Labrador','Perro','6789','6789',_binary '\0',_binary '\0',_binary '',_binary '',_binary '\0','2023-01-09',_binary '','2022-03-01',_binary '\0',_binary '\0',_binary '');
/*!40000 ALTER TABLE `animales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donaciones`
--

DROP TABLE IF EXISTS `donaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donaciones` (
  `IMPORTE` float DEFAULT NULL,
  `CONCEPTO` varchar(100) DEFAULT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `APELLIDO_1` varchar(50) DEFAULT NULL,
  `APELLIDO_2` varchar(50) DEFAULT NULL,
  `CENTRO` bit(1) DEFAULT NULL,
  `FERIA` bit(1) DEFAULT NULL,
  `FECHA` date DEFAULT NULL,
  `ID` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donaciones`
--

LOCK TABLES `donaciones` WRITE;
/*!40000 ALTER TABLE `donaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `donaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturas`
--

DROP TABLE IF EXISTS `facturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facturas` (
  `NUM_FACTURA` int NOT NULL AUTO_INCREMENT,
  `NUM_FACTURA_REAL` int DEFAULT NULL,
  `TIPOLOGIA` enum('GESTION','INCIDENCIA') DEFAULT NULL,
  `FICHERO` varchar(100) DEFAULT NULL,
  `IMPORTE` float DEFAULT NULL,
  `CONCEPTO` varchar(100) DEFAULT NULL,
  `PAGADA` bit(1) DEFAULT NULL,
  `CHIP` int DEFAULT NULL,
  `JAULA` int DEFAULT NULL,
  `FECHA` date DEFAULT NULL,
  PRIMARY KEY (`NUM_FACTURA`),
  KEY `CHIP_idx` (`CHIP`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturas`
--

LOCK TABLES `facturas` WRITE;
/*!40000 ALTER TABLE `facturas` DISABLE KEYS */;
INSERT INTO `facturas` VALUES (1,547,'GESTION',NULL,530,'Test',_binary '',6789,77,NULL);
/*!40000 ALTER TABLE `facturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `familias`
--

DROP TABLE IF EXISTS `familias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `familias` (
  `ID_FAMILIA` int NOT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `APELLIDO_1` varchar(50) DEFAULT NULL,
  `APELLIDO_2` varchar(50) DEFAULT NULL,
  `GENERO` enum('Masculino','Femenino','Otros') DEFAULT NULL,
  `DIRECCION` varchar(100) DEFAULT NULL,
  `POBLACION` varchar(50) DEFAULT NULL,
  `PAIS` varchar(50) DEFAULT NULL,
  `TELEFONO` varchar(20) DEFAULT NULL,
  `DNI` varchar(20) DEFAULT NULL,
  `MAIL` varchar(100) DEFAULT NULL,
  `TIPO_VIVIENDA` varchar(20) DEFAULT NULL,
  `TAMAÑO` varchar(20) DEFAULT NULL,
  `TERRAZA` bit(1) DEFAULT NULL,
  `BALCON` bit(1) DEFAULT NULL,
  `JARDIN` bit(1) DEFAULT NULL,
  `EDAD_MIEMBRO1` int DEFAULT NULL,
  `EDAD_MIEMBRO2` int DEFAULT NULL,
  `EDAD_MIEMBRO3` int DEFAULT NULL,
  `EDAD_MIEMBRO4` int DEFAULT NULL,
  `EDAD_MIEMBRO5` int DEFAULT NULL,
  `ALERGIAS` varchar(100) DEFAULT NULL,
  `HORAS_SOLO` int DEFAULT NULL,
  `ACCESO_EXTERIOR` bit(1) DEFAULT NULL,
  `OTROS_ANIMALES` bit(1) DEFAULT NULL,
  `GATOS` enum('si','no') DEFAULT NULL,
  `PERROS` enum('si','no') DEFAULT NULL,
  `NIÑOS` enum('si','no') DEFAULT NULL,
  `OTRO_ESTERILIZADO` enum('si','no') DEFAULT NULL,
  `ANIMALES_ANTERIORMENTE` enum('si','no') DEFAULT NULL,
  `TIPO_ANIMAL_BUSCA` enum('Gato','Perro') DEFAULT NULL,
  `COMPROMISO_ESTERILIZACION` enum('si','no') DEFAULT NULL,
  `ANIMALES_CON_DOLENCIAS` varchar(100) DEFAULT NULL,
  `ANIMAL_INTERESADO` varchar(100) DEFAULT NULL,
  `ADOPCION` enum('si','no') DEFAULT NULL,
  `ID_ANIMAL` int DEFAULT NULL,
  `NOMBRE_ADOPTADO` varchar(50) DEFAULT NULL,
  `FECHA_ADOPCION` date DEFAULT NULL,
  `ESTERILIZADO` enum('si','no') DEFAULT NULL,
  PRIMARY KEY (`ID_FAMILIA`),
  KEY `ID_ANIMAL` (`ID_ANIMAL`),
  CONSTRAINT `familias_ibfk_1` FOREIGN KEY (`ID_ANIMAL`) REFERENCES `animales` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `familias`
--

LOCK TABLES `familias` WRITE;
/*!40000 ALTER TABLE `familias` DISABLE KEYS */;
/*!40000 ALTER TABLE `familias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gestiones_urgencias`
--

DROP TABLE IF EXISTS `gestiones_urgencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gestiones_urgencias` (
  `ID` int DEFAULT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `CHIP` int DEFAULT NULL,
  `JAULA` int DEFAULT NULL,
  `DIAGNOSTICO` varchar(250) DEFAULT NULL,
  `URGENCIA` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gestiones_urgencias`
--

LOCK TABLES `gestiones_urgencias` WRITE;
/*!40000 ALTER TABLE `gestiones_urgencias` DISABLE KEYS */;
/*!40000 ALTER TABLE `gestiones_urgencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventario`
--

DROP TABLE IF EXISTS `inventario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventario` (
  `PRODUCTO` varchar(150) DEFAULT NULL,
  `TIPO` enum('COMIDA','MEDICAMENTO','MOBILIARIO','JUGUETES') DEFAULT NULL,
  `ESTADO_PRODUCTO` enum('ABIERTO','CERRADO') DEFAULT NULL,
  `FECHA_DONACION` date DEFAULT NULL,
  `CADUCIDAD` date DEFAULT NULL,
  `PRIORIDAD_DE_USO` bit(1) DEFAULT NULL,
  `TIPO_ANIMAL` enum('PERRO','GATO') DEFAULT NULL,
  `ID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventario`
--

LOCK TABLES `inventario` WRITE;
/*!40000 ALTER TABLE `inventario` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trabajadores`
--

DROP TABLE IF EXISTS `trabajadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trabajadores` (
  `ID` bit(1) DEFAULT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `APELLIDO_1` varchar(50) DEFAULT NULL,
  `APELLIDO_2` varchar(50) DEFAULT NULL,
  `USUARIO` varchar(50) DEFAULT NULL,
  `CONTRASEÑA` varchar(50) DEFAULT NULL,
  `DNI` varchar(15) DEFAULT NULL,
  `DIRECCION` varchar(50) DEFAULT NULL,
  `POBLACION` varchar(50) DEFAULT NULL,
  `PAIS` varchar(20) DEFAULT NULL,
  `TELEFONO` bit(1) DEFAULT NULL,
  `MAIL` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabajadores`
--

LOCK TABLES `trabajadores` WRITE;
/*!40000 ALTER TABLE `trabajadores` DISABLE KEYS */;
/*!40000 ALTER TABLE `trabajadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veterinario`
--

DROP TABLE IF EXISTS `veterinario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `veterinario` (
  `ID` int NOT NULL,
  `VETERINARIO` varchar(50) DEFAULT NULL,
  `PROFESIONAL` varchar(50) DEFAULT NULL,
  `DIRECCION` varchar(100) DEFAULT NULL,
  `CIF` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veterinario`
--

LOCK TABLES `veterinario` WRITE;
/*!40000 ALTER TABLE `veterinario` DISABLE KEYS */;
/*!40000 ALTER TABLE `veterinario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voluntarios`
--

DROP TABLE IF EXISTS `voluntarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voluntarios` (
  `ID` int DEFAULT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `APELLIDO_1` varchar(50) DEFAULT NULL,
  `APELLIDO_2` varchar(50) DEFAULT NULL,
  `DNI` varchar(10) DEFAULT NULL,
  `MAIL` varchar(50) DEFAULT NULL,
  `TELEFONO` int DEFAULT NULL,
  `DIAS_DISPONIBLES` enum('LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO','DOMINGO','ENTRE SEMANA','FIN DE SEMANA') DEFAULT NULL,
  `HORARIO_DISPONIBLE` enum('MAÑANA','MEDIODIA','TARDE') DEFAULT NULL,
  `EDAD` int DEFAULT NULL,
  `DONACION` float DEFAULT NULL,
  `CUENTA_BANCARIA` varchar(35) DEFAULT NULL,
  `ACCION_A_REALIZAR` enum('LIMPIEZA','COMIDA','PASEO') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voluntarios`
--

LOCK TABLES `voluntarios` WRITE;
/*!40000 ALTER TABLE `voluntarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `voluntarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-18 19:42:37
