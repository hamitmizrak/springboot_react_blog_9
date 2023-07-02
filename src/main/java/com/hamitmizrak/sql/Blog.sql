-- Create Database
CREATE SCHEMA `blog` DEFAULT CHARACTER SET utf8 ;

-- Database select
use blog;

CREATE TABLE `blog`.`register` (
`id` INT NOT NULL AUTO_INCREMENT,
`username` VARCHAR(150) NULL DEFAULT 'kullanıcı adını girmediniz',
`surname` VARCHAR(45) NULL,
`password` VARCHAR(45) NULL,
`email` VARCHAR(250) NULL,
`create_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`));