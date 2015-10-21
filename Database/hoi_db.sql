-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Anamakine: 127.0.0.1
-- Üretim Zaman?: 17 Eki 2015, 16:43:11
-- Sunucu sürümü: 5.6.15-log
-- PHP Sürümü: 5.5.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Veritaban?: `hoi_db`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yap?s? `hoi_contact`
--

CREATE TABLE IF NOT EXISTS `hoi_contact` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FullName` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `Phone` varchar(50) COLLATE utf8_turkish_ci NOT NULL,
  `Email` varchar(100) COLLATE utf8_turkish_ci NOT NULL,
  `Subject` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `Message` varchar(5000) COLLATE utf8_turkish_ci NOT NULL,
  `CreatedDate` date NOT NULL,
  `IsActive` bit(1) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tablo için tablo yap?s? `hoi_newsrequest`
--

CREATE TABLE IF NOT EXISTS `hoi_newsrequest` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FullName` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `IsActive` bit(2) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci AUTO_INCREMENT=36 ;

--
-- Tablo döküm verisi `hoi_newsrequest`
--

INSERT INTO `hoi_newsrequest` (`Id`, `FullName`, `Email`, `IsActive`) VALUES
(1, 'Hakan Hakyemez', 'email@example.com', b'11'),
(2, 'Hakan Hakyemez', 'email@example.com', b'11'),
(3, 'Hakan Hakyemez', 'email@example.com', b'11'),
(4, 'Hakan Hakyemez', 'email@example.com', b'11'),
(5, 'Hakan Hakyemez', 'email@example.com', b'11'),
(6, 'Hakan Hakyemez', 'email@example.com', b'11'),
(7, 'Hakan Hakyemez', 'email@example.com', b'11'),
(8, 'Hakan Hakyemez', 'email@example.com', b'11'),
(9, 'Hakan Hakyemez', 'email@example.com', b'11'),
(10, 'Hakan Hakyemez', 'email@example.com', b'11'),
(11, 'Hakan Hakyemez', 'email@example.com', b'11'),
(12, 'Hakan Hakyemez', 'email@example.com', b'11'),
(13, 'Hakan Hakyemez', 'email@example.com', b'11'),
(14, 'Hakan Hakyemez', 'email@example.com', b'11'),
(15, 'Hakan Hakyemez', 'email@example.com', b'11'),
(16, 'Hakan Hakyemez', 'email@example.com', b'11'),
(17, 'Hakan Hakyemez', 'email@example.com', b'11'),
(18, 'Hakan Hakyemez', 'email@example.com', b'11'),
(19, 'Hakan Hakyemez', 'email@example.com', b'11'),
(20, 'Hakan Hakyemez', 'email@example.com', b'11'),
(21, 'Hakan Hakyemez', 'email@example.com', b'11'),
(22, 'Hakan Hakyemez', 'email@example.com', b'11'),
(23, 'Hakan Hakyemez', 'email@example.com', b'11'),
(24, 'Hakan Hakyemez', 'email@example.com', b'11'),
(25, 'Hakan Hakyemez', 'email@example.com', b'11'),
(26, 'Hakan Hakyemez', 'email@example.com', b'11'),
(27, 'Hakan Hakyemez', 'email@example.com', b'11'),
(28, 'Hakan Hakyemez', 'email@example.com', b'11'),
(29, 'Hakan Hakyemez', 'email@example.com', b'11'),
(30, 'Hakan Hakyemez', 'email@example.com', b'11'),
(31, 'Hakan Hakyemez', 'email@example.com', b'11'),
(32, 'Hakan Hakyemez', 'email@example.com', b'11'),
(33, 'Hakan Hakyemez', 'email@example.com', b'11'),
(34, 'Hakan Hakyemez', 'email@example.com', b'11'),
(35, 'Hakan Hakyemez', 'email@example.com', b'11');

-- --------------------------------------------------------

--
-- Tablo için tablo yap?s? `hoi_visitor`
--

CREATE TABLE IF NOT EXISTS `hoi_visitor` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FullName` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `Message` varchar(5000) COLLATE utf8_turkish_ci NOT NULL,
  `CreateDate` date NOT NULL,
  `IsActive` bit(2) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
