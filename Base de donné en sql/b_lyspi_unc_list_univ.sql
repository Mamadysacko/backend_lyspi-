-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: b_lyspi_unc
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
-- Table structure for table `list_univ`
--

DROP TABLE IF EXISTS `list_univ`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `list_univ` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `sigle` varchar(20) NOT NULL,
  `id_categorie_univ` int NOT NULL,
  `id_type_univ` int NOT NULL,
  `id_commune` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categorie_univ` (`id_categorie_univ`),
  KEY `id_type_univ` (`id_type_univ`),
  KEY `id_commune` (`id_commune`),
  CONSTRAINT `list_univ_ibfk_1` FOREIGN KEY (`id_categorie_univ`) REFERENCES `categorie_univ` (`id`),
  CONSTRAINT `list_univ_ibfk_2` FOREIGN KEY (`id_type_univ`) REFERENCES `type_univ` (`id`),
  CONSTRAINT `list_univ_ibfk_3` FOREIGN KEY (`id_commune`) REFERENCES `commune` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_univ`
--

LOCK TABLES `list_univ` WRITE;
/*!40000 ALTER TABLE `list_univ` DISABLE KEYS */;
INSERT INTO `list_univ` VALUES (1,'Université Gamal Abdel Nasser de Conakry','UGANC',1,1,32),(2,'Université Général Lansana Conté de Sonfonia','UGLC',1,1,40),(3,'Université Julius Nyerere de Kankan','UJNK',1,1,20),(4,'Université de Kindia','UK',1,1,7),(5,'Université de Labé','UL',1,1,9),(6,'Université de N’Zérékoré','UZ',1,1,24),(7,'Université Aguibou Barry','UAB',1,2,32),(8,'Université Amadou Dieng','UAD',1,2,32),(9,'Université Amadou Dieng','UAD',1,2,3),(10,'Université Amadou Dieng','UAD',1,2,9),(11,'Université Général Lansana Conté de Lambanyi','UGLC-L',1,2,39),(12,'Université Libre de Guinée','ULG',1,2,31),(13,'Université Barack Obama','UBO',1,2,32),(14,'Université Le Roi Mohamed','URM6',1,2,32),(15,'Université Nongo Conakry','UNC',1,2,32),(16,'Keyce Academy de Conakry','KAC',1,2,32),(17,'Université Mercure International','UMI',1,2,32),(18,'Université Kofi Annan de Guinée','UKAG',1,2,32),(19,'Université Victor Hugo','UVH',1,2,32),(20,'Université Mahatma Gandhi','UMG',1,2,32),(21,'Institut Supérieur des Sciences de l’Éducation de Guinée','ISSEG',2,1,32),(22,'Institut Supérieur Agronomique et Vétérinaire','ISAV',2,1,18),(23,'Institut Supérieur des Mines et de Géologie','ISMG',2,1,2),(24,'Institut Supérieur de Technologie','IST',2,1,12),(25,'Institut Supérieur des Sciences et de Médecine Vétérinaire','ISSMV',2,1,8),(26,'Institut Supérieur d’Architecture et d’Urbanisme','ISAU',2,1,32),(27,'Institut Supérieur des Arts Mory Kanté','ISAMK',2,1,4),(28,'Institut Supérieur de l’Information et de la Communication','ISIC',2,1,3),(29,'Institut Supérieur de Commerce et d’Administration des Entreprises de Guinée','ISCAEG',2,1,32),(30,'Institut Supérieur de Formation à Distance','ISFAD',2,1,32),(31,'École Supérieure de Tourisme et de l’Hôtellerie','ESTH',3,1,32),(32,'École Nationale de Secrétariat, d’Administration et de Commerce','ENSAC',3,1,32),(33,'Centre de Formation Professionnelle de Conakry','CFPC',3,1,32),(34,'École de Formation en Hôtellerie et Tourisme','EFHT',3,2,32),(35,'Institut de Formation aux Métiers du Bâtiment','IFMB',3,2,32),(36,'Université International Collège','UNIC',1,2,32);
/*!40000 ALTER TABLE `list_univ` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-29  6:20:45
