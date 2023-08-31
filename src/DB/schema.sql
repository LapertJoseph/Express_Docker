CREATE OR REPLACE TABLE user (
  `user_id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255),
  `lastname` VARCHAR(255),
  `email` VARCHAR(255),
  `password` VARCHAR(255),
  `actif` TINYINT(1)
);
