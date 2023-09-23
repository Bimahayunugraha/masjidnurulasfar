-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2023 at 03:14 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `masjidnurulasfar`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `mstr_article_type`
--

CREATE TABLE `mstr_article_type` (
  `id` int(11) NOT NULL,
  `article_type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mstr_article_type`
--

INSERT INTO `mstr_article_type` (`id`, `article_type`) VALUES
(1, 'Kegiatan 2'),
(2, 'Kajian'),
(3, 'TPA'),
(4, 'Tahsin');

-- --------------------------------------------------------

--
-- Table structure for table `mstr_contact_us`
--

CREATE TABLE `mstr_contact_us` (
  `id` int(11) NOT NULL,
  `address` text NOT NULL,
  `contact` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `operational_hour` varchar(255) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mstr_contact_us`
--

INSERT INTO `mstr_contact_us` (`id`, `address`, `contact`, `email`, `operational_hour`, `created_by`, `created_at`, `updated_by`, `updated_at`) VALUES
(1, 'Jl Kawula Pitados, Daratan II, Sendangarum, Minggir, Sleman, DIY', '+62 813-2882-0723\r\n+62 821-3603-6612\r\n+62 858-6813-3596', 'urulasfar22@gmail.com', 'Senin - Minggu\n08.00 - 18.00 WIB', '', '2023-04-10 08:52:21', NULL, '2023-04-10 12:43:27');

-- --------------------------------------------------------

--
-- Table structure for table `mstr_social_media`
--

CREATE TABLE `mstr_social_media` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `url` text NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mstr_social_media`
--

INSERT INTO `mstr_social_media` (`id`, `name`, `url`, `created_by`, `created_at`, `updated_by`, `updated_at`) VALUES
(1, 'Whatsapp', 'https://api.whatsapp.com/send/?phone=6281328820723&text&app_absent=0', 'id', '2023-04-10 02:10:08', 'Admin', '2023-04-10 06:18:15'),
(2, 'Instagram', 'https://www.instagram.com/masjidnurulasfar/', 'id', '2023-04-10 02:10:50', NULL, NULL),
(4, 'Youtube', 'https://www.youtube.com/@masjidnurulasfar', 'Admin', '2023-04-10 06:18:33', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tr_agenda`
--

CREATE TABLE `tr_agenda` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `slug` varchar(120) DEFAULT NULL,
  `description` text NOT NULL,
  `schedule` varchar(100) NOT NULL,
  `image_file_name` varchar(255) NOT NULL,
  `image_original_file_name` varchar(255) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tr_agenda`
--

INSERT INTO `tr_agenda` (`id`, `title`, `slug`, `description`, `schedule`, `image_file_name`, `image_original_file_name`, `created_by`, `created_at`, `updated_by`, `updated_at`) VALUES
(1, 'Agenda puasa', 'agenda-puasa', 'lorem ipsum sit amet dolor', 'Senin ba\'da dhuhur', '1681129477.jpg', 'Banner 8 New 1.jpg', 'Admin', '2023-04-10 05:24:37', NULL, '2023-04-10 12:24:37'),
(2, 'TPA Anak', 'tpa-anak', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta harum enim voluptatibus asperiores nam fuga magni praesentium perferendis corporis odit omnis quo voluptatem officiis totam ducimus ipsum sit numquam cum, neque accusantium doloribus, voluptate illo odio! Velit hic eligendi itaque cumque ipsa perspiciatis. Aliquam quisquam sunt beatae dignissimos tenetur earum quo accusamus eligendi voluptates tempore praesentium sint inventore laboriosam, adipisci esse rem! Excepturi ab beatae quaerat inventore voluptatem unde consequuntur delectus accusamus et magnam deleniti temporibus doloribus est molestias cum velit nulla rem ducimus in, fugiat veniam non fugit voluptatibus. Tempora ea ex maiores iure. Id aliquam blanditiis delectus minima.', 'Ahad Pon Ba`da Isya - selesai', '1680757670.jpg', 'Banner 7 New.jpg', 'id', '2023-04-05 22:07:50', NULL, '2023-04-06 05:07:50'),
(3, 'Kajian Mualaf', 'kajian-mualaf', 'Kajian seputar pendidikan islam yang ditujukan kepada mualaf', 'Ahad Pon Ba`da Isya - selesai', '1681115684.jpg', 'kajian-muslimah.jpg', 'id', '2023-04-10 01:34:44', NULL, NULL),
(4, 'Kajian Muslimah', 'kajian-muslimah', 'Lorem ipsum dolor sir amet.', 'Sabtu Pahing', '1681132946.jpg', 'tpa-anak.jpg', 'Admin', '2023-04-10 06:22:26', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tr_article`
--

CREATE TABLE `tr_article` (
  `id` int(11) NOT NULL,
  `article_type_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `slug` varchar(120) DEFAULT NULL,
  `content` text NOT NULL,
  `image_file_name` varchar(255) NOT NULL,
  `image_original_file_name` varchar(255) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tr_article`
--

INSERT INTO `tr_article` (`id`, `article_type_id`, `title`, `slug`, `content`, `image_file_name`, `image_original_file_name`, `created_by`, `created_at`, `updated_by`, `updated_at`) VALUES
(4, 2, 'Berita ramadahan', 'berita-ramadahan', '<p>Follow saya di <a href=\"https://stackoverflow.com/questions/27298426/how-to-pass-get-parameters-to-laravel-from-with-get-method\" target=\"_self\">@masjidnurulasfar</a></p>\n<blockquote>jangan menyerah</blockquote>\n<ul>\n<li>satu</li>\n<li>dua</li>\n<li>tiga</li>\n</ul>\n<p><em>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</em> Et incidunt accusamus eligendi excepturi fugit sunt placeat tenetur fugiat exercitationem reprehenderit unde voluptate facere amet ab sint, dolore doloremque? Voluptates accusantium distinctio quisquam doloremque consequuntur, optio porro ducimus id autem error ad cum, quod, alias eaque tenetur delectus libero quis natus odit. Sunt minus odit optio porro iusto nemo omnis dicta sit veritatis fugit eos ipsam, debitis totam sequi rem unde odio aut possimus harum iste laudantium pariatur fuga amet! Excepturi officiis sequi eaque. Fuga consectetur non ab voluptatem doloremque corporis optio exercitationem rem? Perferendis animi magni excepturi modi laborum! Odit corrupti distinctio at facilis ratione voluptatem, atque enim dolores neque necessitatibus est, quibusdam quam consequuntur soluta libero. Neque officiis sint, delectus ducimus ratione quam minima doloribus, nemo totam tempora ut vitae cumque nostrum minus distinctio! Itaque natus impedit, nam atque esse autem tempora aliquid alias fugiat, odit, veniam quo culpa.</p>', '1681114562-1.jpg', 'Dokumentasi Pelaporan Progress Kepada Mbak Ida dan Bu Dewi Selaku Pengurus Masjid Nurul Asfar 2.jpg', 'Admin', '2023-04-10 02:27:39', NULL, '2023-04-10 09:27:39');

-- --------------------------------------------------------

--
-- Table structure for table `tr_article_image`
--

CREATE TABLE `tr_article_image` (
  `id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `image_file_name` varchar(255) DEFAULT NULL,
  `image_original_file_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tr_article_image`
--

INSERT INTO `tr_article_image` (`id`, `article_id`, `image_file_name`, `image_original_file_name`) VALUES
(42, 4, '1681114562-1.jpg', 'Dokumentasi Pelaporan Progress Kepada Mbak Ida dan Bu Dewi Selaku Pengurus Masjid Nurul Asfar 2.jpg'),
(43, 4, '1681114562-2.jpg', 'masjid-nurul-asfar-3.jpg'),
(44, 4, '1681114562-3.png', 'Oke.png');

-- --------------------------------------------------------

--
-- Table structure for table `tr_event`
--

CREATE TABLE `tr_event` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `image_file_name` varchar(255) NOT NULL,
  `image_original_file_name` varchar(255) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL DEFAULT 'admin',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `email_verified_at`, `password`, `roles`, `remember_token`, `created_at`, `updated_at`) VALUES
('98c326da-4bea-4980-a1a4-8097cec15712', 'Admin', 'admin@gmail.com', '087758524277', NULL, '$2y$10$OghBo5EIPn1E1ZEwDZC5ZOat8LWzm23PSrqYLESXeTGG6kc3Yqdua', 'admin', NULL, '2023-03-23 23:29:38', '2023-03-23 23:29:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mstr_article_type`
--
ALTER TABLE `mstr_article_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mstr_contact_us`
--
ALTER TABLE `mstr_contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mstr_social_media`
--
ALTER TABLE `mstr_social_media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `tr_agenda`
--
ALTER TABLE `tr_agenda`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tr_article`
--
ALTER TABLE `tr_article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `article_type_id` (`article_type_id`);

--
-- Indexes for table `tr_article_image`
--
ALTER TABLE `tr_article_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_article_article_image` (`article_id`);

--
-- Indexes for table `tr_event`
--
ALTER TABLE `tr_event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_phone_unique` (`phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `mstr_article_type`
--
ALTER TABLE `mstr_article_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `mstr_social_media`
--
ALTER TABLE `mstr_social_media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tr_agenda`
--
ALTER TABLE `tr_agenda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tr_article`
--
ALTER TABLE `tr_article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tr_article_image`
--
ALTER TABLE `tr_article_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `tr_event`
--
ALTER TABLE `tr_event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tr_article`
--
ALTER TABLE `tr_article`
  ADD CONSTRAINT `FK_tr_article_mstr_article_type` FOREIGN KEY (`article_type_id`) REFERENCES `mstr_article_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tr_article_image`
--
ALTER TABLE `tr_article_image`
  ADD CONSTRAINT `FK_article_article_image` FOREIGN KEY (`article_id`) REFERENCES `tr_article` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
