CREATE OR REPLACE TABLE user (
  `user_id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255),
  `lastname` VARCHAR(255),
  `email` VARCHAR(255),
  `password` VARCHAR(255),
  `actif` TINYINT(1)
);

CREATE OR REPLACE TABLE card (
  `card_id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `card_name` VARCHAR(255),
  `card_stars` INT(11),
  `card_attack` INT(11),
  `card_defense` INT(11),
  `card_effect` TINYINT(1),
  `card_skill` VARCHAR(255),
  `card_image_url` VARCHAR(255),
  `user_id` INT(11),
  CONSTRAINT `fk_card_user`
  FOREIGN KEY (`user_id`) REFERENCES user (`user_id`)
  ON DELETE NO ACTION ON UPDATE NO ACTION
);