-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 10, 2020 at 10:15 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `frame`
--

-- --------------------------------------------------------

--
-- Table structure for table `frame_type`
--

CREATE TABLE `frame_type` (
  `FRID` int(11) NOT NULL,
  `FRWIDTH` float NOT NULL,
  `FRDEPTH` float NOT NULL,
  `FRCOLOR` varchar(255) NOT NULL,
  `FRMATERIAL` varchar(255) NOT NULL,
  `FRPRICE` int(20) NOT NULL,
  `FRIMG` varchar(255) NOT NULL,
  `FRCODE` varchar(10) NOT NULL,
  `FRREBATE` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `frame_type`
--

INSERT INTO `frame_type` (`FRID`, `FRWIDTH`, `FRDEPTH`, `FRCOLOR`, `FRMATERIAL`, `FRPRICE`, `FRIMG`, `FRCODE`, `FRREBATE`) VALUES
(1, 2, 2, 'BLACK', 'WOOD', 2, 'images/frame1.png', '100A', 0.5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `frame_type`
--
ALTER TABLE `frame_type`
  ADD PRIMARY KEY (`FRID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `frame_type`
--
ALTER TABLE `frame_type`
  MODIFY `FRID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
