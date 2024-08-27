-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2024 at 09:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elearning`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username_email` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username_email`, `password`) VALUES
('himanshisharma@gmail.com', '12345'),
('himanshisharma@gmail.com', '12345'),
('himanshisharma@gmail.com', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `status` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `start`, `end`, `status`, `createdAt`, `updatedAt`, `Description`) VALUES
(11, '2024-07-30 08:00:00', '2024-07-30 10:00:00', 'rejected', '2024-08-03 15:55:52', '2024-08-03 15:56:18', 'kuch bhi padh lunga, bas gurgaon le chalo'),
(12, '2024-07-29 06:30:00', '2024-07-29 07:30:00', 'accepted', '2024-08-03 16:09:02', '2024-08-03 16:15:46', 'Russian accent'),
(13, '2024-08-01 07:30:00', '2024-08-01 08:30:00', 'rejected', '2024-08-03 16:12:49', '2024-08-03 16:15:49', 'Russian Accent'),
(14, '2024-08-05 00:00:00', '2024-08-05 01:00:00', 'rejected', '2024-08-05 07:15:41', '2024-08-05 07:40:05', 'Phillipian accent'),
(15, '2024-08-07 13:00:00', '2024-08-07 16:00:00', 'accepted', '2024-08-06 03:26:37', '2024-08-06 03:38:20', 'japense accent');

-- --------------------------------------------------------

--
-- Table structure for table `languageinsert`
--

CREATE TABLE `languageinsert` (
  `languageid` varchar(100) NOT NULL,
  `languagename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `languageinsert`
--

INSERT INTO `languageinsert` (`languageid`, `languagename`) VALUES
('1234560', 'Chinese'),
('1234561', 'French'),
('1234562', 'Russian'),
('1234563', 'Chinese');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `lang_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`lang_name`) VALUES
('French'),
('German'),
('Russian'),
('Japanese'),
('Korean'),
('Vietnamese'),
('Italian'),
('Chinese'),
('Arabic'),
('Farsi'),
('Hebrew'),
('Phillipians'),
('Urdu'),
('Sanskrit'),
('English'),
('American');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `uname` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `uname`, `password`) VALUES
(1, 'lingualeap', '12345'),
(2, 'lingo', '54321');

-- --------------------------------------------------------

--
-- Table structure for table `materialfetch`
--

CREATE TABLE `materialfetch` (
  `id` int(20) NOT NULL,
  `image` varchar(20) NOT NULL,
  `chapter` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `materialfetch`
--

INSERT INTO `materialfetch` (`id`, `image`, `chapter`) VALUES
(1, '/image/book.jpeg', 'Chapter 1'),
(2, '/image/book.jpeg', 'Chapter 2'),
(4, '/image/book.jpeg', 'Chapter 3'),
(5, '/image/book.jpeg', 'Chapter 4'),
(6, '/image/book.jpeg', 'Chapter 5'),
(7, '/image/book.jpeg', 'Chapter 6');

-- --------------------------------------------------------

--
-- Table structure for table `mylanguages`
--

CREATE TABLE `mylanguages` (
  `languageimage` varchar(200) NOT NULL,
  `languagename` varchar(100) NOT NULL,
  `teachername` varchar(100) NOT NULL,
  `experience` varchar(100) NOT NULL,
  `languageid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mylanguages`
--

INSERT INTO `mylanguages` (`languageimage`, `languagename`, `teachername`, `experience`, `languageid`) VALUES
('/image/german.jpeg', 'German', 'Himanshi Sharma', '5 Years', 20001),
('/image/image5.jpg', 'English', 'Jaya Saini', '5 Years', 20002),
('/image/image2.jpg', 'Korean', 'Mahima Singh', '5 Years', 20003),
('/image/image4.jpg', 'Japanese', 'Arpita ', '5 Years', 20004),
('/image/image11.jpg', 'CPP', 'Aditya Pratap Singh', '5 Years', 20005),
('/image/image6.jpg', 'Russian', 'Rashi Sharma', '5 Years', 20006),
('/image/image9.jpg', 'American', 'Saksham Rajpoot', '5 Years', 20007);

-- --------------------------------------------------------

--
-- Table structure for table `presentlearning`
--

CREATE TABLE `presentlearning` (
  `languagesimage` varchar(200) NOT NULL,
  `languagesname` varchar(100) NOT NULL,
  `teachersname` varchar(100) NOT NULL,
  `studentenroll` varchar(100) NOT NULL,
  `languageid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `presentlearning`
--

INSERT INTO `presentlearning` (`languagesimage`, `languagesname`, `teachersname`, `studentenroll`, `languageid`) VALUES
('/image/image6.jpg', 'Nepal', 'Kanika Verma', '4K', 20001),
('/image/german.jpeg', 'German', 'Himanshi Sharma', '2K', 20007);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `reviewss` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`reviewss`) VALUES
('good learning');

-- --------------------------------------------------------

--
-- Table structure for table `signinsert`
--

CREATE TABLE `signinsert` (
  `uname` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `uname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `confirm_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`uname`, `email`, `password`, `confirm_password`) VALUES
('Himanshi Sharma', 'himanshi@gmail.com', '12345', '12345'),
('username Himanshi', 'him@gmail.com', '12345', '12345'),
('username Rashi', 'rashi@gmail.com', '12345', '12345'),
('username Rashi', 'rashi@gmail.com', '12345', '12345'),
('Shruti Jain', 'shruti@gmail.com', '12345', '12345'),
('Shruti Mishra', 'shruti@gmail.com', '12345', '12345'),
('', '', '12345', ''),
('', '', '12345', ''),
('', '', '12345', ''),
('', '', '12345', ''),
('', '', '12345', ''),
('', '', '12345', '');

-- --------------------------------------------------------

--
-- Table structure for table `studentdata`
--

CREATE TABLE `studentdata` (
  `id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Language` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentdata`
--

INSERT INTO `studentdata` (`id`, `Name`, `Language`) VALUES
(1, 'Anand', 'English'),
(2, 'Usaid', 'Hindi'),
(3, 'asd', 'ssdv'),
(4, 'afe', 'ssfs'),
(5, 'jhgsdg', 'hdvhs'),
(6, 'bigo', 'ygyuf'),
(7, 'jvyu', 'jhgyuf'),
(8, 'kjsbdiuf', 'jhgdfgv'),
(9, 'ksg', 'lnfuv'),
(10, 'kushuov', 'kjbsuiv'),
(11, 'kjbsf', 'ksbduo'),
(12, 'ksgdf', 'sgd'),
(13, 'ksggv', 'uhsf'),
(14, 'jsydg', 'kushfgv'),
(15, 'kdjhvs', 'ksufg');

-- --------------------------------------------------------

--
-- Table structure for table `studentenrooll`
--

CREATE TABLE `studentenrooll` (
  `Name` varchar(100) NOT NULL,
  `Language_Opted` varchar(100) NOT NULL,
  `imageURL` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentenrooll`
--

INSERT INTO `studentenrooll` (`Name`, `Language_Opted`, `imageURL`) VALUES
('Vishal', 'Languages-Hinglish, English', '/image/MaleStudent.png'),
('Vihan', 'Languages- English', '/image/MaleStudent.png'),
('Vishal', 'Languages-Hinglish, English', '/image/MaleStudent.png'),
('Vihan', 'Languages- English', '/image/MaleStudent.png'),
('Vihan', 'Languages- English', '/image/MaleStudent.png'),
('Vihan Garg', 'Languages- English', '/image/MaleStudent.png'),
('Arohi', 'Languages- English', '/image/Student.webp');

-- --------------------------------------------------------

--
-- Table structure for table `studentlogin`
--

CREATE TABLE `studentlogin` (
  `uname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentlogin`
--

INSERT INTO `studentlogin` (`uname`, `email`, `password`) VALUES
('', 'himanshi@gmail.com', '12345'),
('', 'Atika@gmail.com', '12345'),
('', 'Atika@gmail.com', '12345'),
('', 'vansh@gmail.com', '12345'),
('Himanhsi Sharma', 'himanshi@gmail.com', '12345'),
('jaya', 'jaya@gmail.com', '12345'),
('Mahima', 'Mahima@gmail.com', '12345'),
('me', 'me@gmail.com', '12345'),
('lingo', 'lingo@gmail.com', '12345'),
('ansh@gmail.com', '', '12345'),
('Lavendar', 'Lavendar@gmail.com', '12345'),
('Kajal Verma', 'Kajal@gmail.com', '12345'),
('', '', ''),
('', '', ''),
('Aman', 'aman12@gmail.com', 'aman'),
('Rohan', 'trial123@gmail,com', 'aditya'),
('Rohan', 'trial123@gmail,com', 'aditya'),
('sneha', 'trial321@gmail.com', 'aditya'),
('Tablet', 'tablet@gmail.com', 'samsung'),
('Adam', 'adam@gmail.com', 'adam'),
('Alex', 'alex@gmail.com', 'alex'),
('x', 'x', 'x'),
('e', 'e@gmail.com', 'e'),
('Aman', 'neid3361@gmail.com', 'dfdf');

-- --------------------------------------------------------

--
-- Table structure for table `studentprofile`
--

CREATE TABLE `studentprofile` (
  `studentid` int(11) NOT NULL,
  `uname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobileno` varchar(100) NOT NULL,
  `batch` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentprofile`
--

INSERT INTO `studentprofile` (`studentid`, `uname`, `email`, `mobileno`, `batch`, `location`) VALUES
(1, 'Atika', 'Atika@gmail.com', '', '', ''),
(2, '', 'vansh@gmail.com', '', '', ''),
(3, 'lingo', 'lingo@gmail.com', '', '', ''),
(4, 'ansh@gmail.com', '', '', '', ''),
(5, 'Lavendar', 'Lavendar@gmail.com', '', '', ''),
(6, 'Kajal Verma', 'Kajal@gmail.com', '', '', ''),
(7, '', '', '', '', ''),
(8, '', '', '', '', ''),
(9, 'Aman', 'aman12@gmail.com', '', '', ''),
(10, 'Rohan', 'trial123@gmail,com', '', '', ''),
(11, 'Rohan', 'trial123@gmail,com', '', '', ''),
(12, 'sneha', 'trial321@gmail.com', '', '', ''),
(13, 'Tablet', 'tablet@gmail.com', '', '', ''),
(14, 'Adam', 'adam@gmail.com', '', '', ''),
(15, 'Alex', 'alex@gmail.com', '', '', ''),
(16, 'x', 'x', '', '', ''),
(17, 'e', 'e@gmail.com', '', '', ''),
(18, 'Aman', 'neid3361@gmail.com', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `studentsignup`
--

CREATE TABLE `studentsignup` (
  `uname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `confirm_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentsignup`
--

INSERT INTO `studentsignup` (`uname`, `email`, `password`, `confirm_password`) VALUES
('Himanhsi Sharma', 'himanshi@gmail.com', '12345', '12345'),
('Atika', 'Atika@gmail.com', '12345', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `table`
--

CREATE TABLE `table` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `table1`
--

CREATE TABLE `table1` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `table1`
--

INSERT INTO `table1` (`id`, `username`, `password`) VALUES
(1, 'Himanshi', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `teacherenroll`
--

CREATE TABLE `teacherenroll` (
  `Name` varchar(100) NOT NULL,
  `Language_Proficiency` varchar(100) NOT NULL,
  `imageURL` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacherenroll`
--

INSERT INTO `teacherenroll` (`Name`, `Language_Proficiency`, `imageURL`) VALUES
('Gaurav Malhotra', 'English , French', '/image/Teacher.webp'),
('Vinod Kumar', 'Vietnamese , Japanese', '/image/Teacher.webp'),
('Meenakshi Singh', 'Arabic , Urdu', '/image/Female.png'),
('Teena Oberoi', 'Hebrew ,German', '/image/Teacher.webp'),
('Steivie   ', 'English , Farsi', '/image/Teacher.webp'),
('Archana Sengar', 'Chinese , Korean', '/image/Female.png');

-- --------------------------------------------------------

--
-- Table structure for table `teacherlogin`
--

CREATE TABLE `teacherlogin` (
  `uname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacherlogin`
--

INSERT INTO `teacherlogin` (`uname`, `email`, `password`) VALUES
('', 'Much@gmail.com', '12345'),
('lingualeap', 'lingua@gmail.com', '12345'),
('Gaurav Sir', 'Gauravsir@gmail.com', '12345'),
('Vansh Balecha', 'vansh@gmail.com', '12345'),
('Aman', 'aman12@gmail.com', 'aman'),
('Aman', 'aman12@gmail.com', 'kuchbhi'),
('Aman', 'neid3361@gmail.com', 'asas');

-- --------------------------------------------------------

--
-- Table structure for table `teacherprofile`
--

CREATE TABLE `teacherprofile` (
  `teacherid` int(11) NOT NULL,
  `uname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobileno` varchar(100) NOT NULL,
  `batch` varchar(100) NOT NULL,
  `languages` varchar(100) NOT NULL,
  `certification` varchar(100) NOT NULL,
  `location` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacherprofile`
--

INSERT INTO `teacherprofile` (`teacherid`, `uname`, `email`, `mobileno`, `batch`, `languages`, `certification`, `location`) VALUES
(1, 'As Much', 'Much@gmail.com', '', '', '', '', ''),
(2, 'Mahimaji', 'mahimaji@gmail.com', '', '', '', '', ''),
(3, 'lingualeap', 'lingua@gmail.com', '', '', '', '', ''),
(4, 'Gaurav Sir', 'Gauravsir@gmail.com', '', '', '', '', ''),
(5, 'Vansh Balecha', 'vansh@gmail.com', '', '', '', '', ''),
(6, 'Aman', 'aman12@gmail.com', '', '', '', '', ''),
(7, 'Aman', 'aman12@gmail.com', '', '', '', '', ''),
(8, 'Aman', 'neid3361@gmail.com', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `teachersignup`
--

CREATE TABLE `teachersignup` (
  `uname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `confirm_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teachersignup`
--

INSERT INTO `teachersignup` (`uname`, `email`, `password`, `confirm_password`) VALUES
('As Much', 'Much@gmail.com', '12345', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `testing1`
--

CREATE TABLE `testing1` (
  `id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testing1`
--

INSERT INTO `testing1` (`id`, `Name`) VALUES
(1, 'FRENCH'),
(2, 'GERMAN'),
(3, 'RUSSIAN'),
(4, 'JAPANESE'),
(5, 'KOREAN');

-- --------------------------------------------------------

--
-- Table structure for table `testlanguage`
--

CREATE TABLE `testlanguage` (
  `languageId` int(11) NOT NULL,
  `languages` varchar(100) NOT NULL,
  `imageURL` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testlanguage`
--

INSERT INTO `testlanguage` (`languageId`, `languages`, `imageURL`) VALUES
(1, 'German', '/image/german.jpeg'),
(2, 'Russian', '/image/image3.jpg'),
(3, 'English', '/image/image5.jpg'),
(4, 'Korean', '/image/korea.webp'),
(5, 'French', '/image/french.png'),
(6, 'Japanese', '/image/japanese.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `materialfetch`
--
ALTER TABLE `materialfetch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mylanguages`
--
ALTER TABLE `mylanguages`
  ADD PRIMARY KEY (`languageid`);

--
-- Indexes for table `presentlearning`
--
ALTER TABLE `presentlearning`
  ADD PRIMARY KEY (`languageid`);

--
-- Indexes for table `studentdata`
--
ALTER TABLE `studentdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studentprofile`
--
ALTER TABLE `studentprofile`
  ADD PRIMARY KEY (`studentid`);

--
-- Indexes for table `table`
--
ALTER TABLE `table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `table1`
--
ALTER TABLE `table1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacherprofile`
--
ALTER TABLE `teacherprofile`
  ADD PRIMARY KEY (`teacherid`);

--
-- Indexes for table `testing1`
--
ALTER TABLE `testing1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testlanguage`
--
ALTER TABLE `testlanguage`
  ADD PRIMARY KEY (`languageId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `materialfetch`
--
ALTER TABLE `materialfetch`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `mylanguages`
--
ALTER TABLE `mylanguages`
  MODIFY `languageid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20008;

--
-- AUTO_INCREMENT for table `presentlearning`
--
ALTER TABLE `presentlearning`
  MODIFY `languageid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20008;

--
-- AUTO_INCREMENT for table `studentdata`
--
ALTER TABLE `studentdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `studentprofile`
--
ALTER TABLE `studentprofile`
  MODIFY `studentid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `table`
--
ALTER TABLE `table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `table1`
--
ALTER TABLE `table1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `teacherprofile`
--
ALTER TABLE `teacherprofile`
  MODIFY `teacherid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `testing1`
--
ALTER TABLE `testing1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `testlanguage`
--
ALTER TABLE `testlanguage`
  MODIFY `languageId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
