-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Anamakine: 127.0.0.1
-- Üretim Zaman?: 01 Ara 2015, 21:12:22
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
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci AUTO_INCREMENT=4 ;

--
-- Tablo döküm verisi `hoi_contact`
--

INSERT INTO `hoi_contact` (`Id`, `FullName`, `Phone`, `Email`, `Subject`, `Message`, `CreatedDate`, `IsActive`) VALUES
(1, 'Veysel', '555555555', 'hakan@hakyemez.com', 'test test test test', 'test test test test', '2015-12-01', b'1'),
(2, 'Veysel', '555555555', 'hakan@hakyemez.com', 'test test test test', 'test test test test', '2015-12-01', b'1'),
(3, 'Veysel', '555555555', 'hakan@hakyemez.com', 'test test test test', 'test test test test', '2015-12-01', b'1');

-- --------------------------------------------------------

--
-- Tablo için tablo yap?s? `hoi_login`
--

CREATE TABLE IF NOT EXISTS `hoi_login` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Tablo döküm verisi `hoi_login`
--

INSERT INTO `hoi_login` (`Id`, `Username`, `Password`) VALUES
(1, 'admin', '12345');

-- --------------------------------------------------------

--
-- Tablo için tablo yap?s? `hoi_newsrequest`
--

CREATE TABLE IF NOT EXISTS `hoi_newsrequest` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FullName` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `IsActive` bit(1) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci AUTO_INCREMENT=56 ;

--
-- Tablo döküm verisi `hoi_newsrequest`
--

INSERT INTO `hoi_newsrequest` (`Id`, `FullName`, `Email`, `IsActive`) VALUES
(2, 'Hakan Hakyemez', 'email@example.com', b'1'),
(3, 'Hakan Hakyemez', 'email@example.com', b'1'),
(4, 'Hakan Hakyemez', 'email@example.com', b'1'),
(5, 'Hakan Hakyemez', 'email@example.com', b'1'),
(6, 'Hakan Hakyemez', 'email@example.com', b'1'),
(7, 'Hakan Hakyemez', 'email@example.com', b'1'),
(8, 'Hakan Hakyemez', 'email@example.com', b'1'),
(9, 'Hakan Hakyemez', 'email@example.com', b'1'),
(10, 'Hakan Hakyemez', 'email@example.com', b'1'),
(11, 'Hakan Hakyemez', 'email@example.com', b'1'),
(12, 'Hakan Hakyemez', 'email@example.com', b'1'),
(13, 'Hakan Hakyemez', 'email@example.com', b'1'),
(14, 'Hakan Hakyemez', 'email@example.com', b'1'),
(15, 'Hakan Hakyemez', 'email@example.com', b'1'),
(16, 'Hakan Hakyemez', 'email@example.com', b'1'),
(17, 'Hakan Hakyemez', 'email@example.com', b'1'),
(18, 'Hakan Hakyemez', 'email@example.com', b'1'),
(19, 'Hakan Hakyemez', 'email@example.com', b'1'),
(20, 'Hakan Hakyemez', 'email@example.com', b'1'),
(21, 'Hakan Hakyemez', 'email@example.com', b'1'),
(22, 'Hakan Hakyemez', 'email@example.com', b'1'),
(23, 'Hakan Hakyemez', 'email@example.com', b'1'),
(24, 'Hakan Hakyemez', 'email@example.com', b'1'),
(25, 'Hakan Hakyemez', 'email@example.com', b'1'),
(26, 'Hakan Hakyemez', 'email@example.com', b'1'),
(27, 'Hakan Hakyemez', 'email@example.com', b'1'),
(28, 'Hakan Hakyemez', 'email@example.com', b'1'),
(29, 'Hakan Hakyemez', 'email@example.com', b'1'),
(30, 'Hakan Hakyemez', 'email@example.com', b'1'),
(31, 'Hakan Hakyemez', 'email@example.com', b'1'),
(32, 'Hakan Hakyemez', 'email@example.com', b'1'),
(33, 'Hakan Hakyemez', 'email@example.com', b'1'),
(34, 'Hakan Hakyemez', 'email@example.com', b'1'),
(35, 'Hakan Hakyemez', 'email@example.com', b'1'),
(36, 'Hakan Hakyemez', 'email@example.com', b'1'),
(37, 'Hakan Hakyemez', 'email@example.com', b'1'),
(38, 'Hakan Hakyemez', 'email@example.com', b'1'),
(39, 'Hakan Hakyemez', 'email@example.com', b'1'),
(40, 'Hakan Hakyemez', 'email@example.com', b'1'),
(41, 'Hakan Hakyemez', 'email@example.com', b'1'),
(42, 'Hakan Hakyemez', 'email@example.com', b'1'),
(43, 'Hakan Hakyemez', 'email@example.com', b'1'),
(44, 'Hakan Hakyemez', 'email@example.com', b'1'),
(45, 'Hakan Hakyemez', 'email@example.com', b'1'),
(46, 'Hakan Hakyemez', 'email@example.com', b'1'),
(47, 'Hakan Hakyemez', 'email@example.com', b'1'),
(48, 'Hakan Hakyemez', 'email@example.com', b'1'),
(49, 'Hakan Hakyemez', 'email@example.com', b'1'),
(50, 'Hakan Hakyemez', 'email@example.com', b'1'),
(51, 'Hakan Hakyemez', 'email@example.com', b'1'),
(52, 'admin', 'a@mail.com', b'1'),
(53, 'admin', 'a@mail.com', b'1'),
(54, 'admin', 'a@mail.com', b'1'),
(55, 'admin', 'a@mail.com', b'1');

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
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci AUTO_INCREMENT=6 ;

--
-- Tablo döküm verisi `hoi_visitor`
--

INSERT INTO `hoi_visitor` (`Id`, `FullName`, `Email`, `Message`, `CreateDate`, `IsActive`) VALUES
(1, 'Veysel', 'hakan@hakyemez.com', 'test test test test', '2015-12-01', b'01'),
(2, 'Veysel', 'hakan@hakyemez.com', 'test test test test', '2015-12-01', b'01');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
