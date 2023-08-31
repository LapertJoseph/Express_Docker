-------------------------------------------
-- CRUD USER --
-------------------------------------------  

-------------------------------------------
-- getUser : get list of all user ---------
-------------------------------------------
DELIMITER // 

CREATE OR REPLACE PROCEDURE getUser()
BEGIN
  SELECT * FROM user;
END //

DELIMITER ;

-------------------------------------------
-- getUserById : get user with id ---------
-------------------------------------------

DELIMITER //

CREATE OR REPLACE PROCEDURE getUserById(
  IN p_user_id INT(11)
)
BEGIN
  SELECT * FROM user WHERE p_user_id = user_id;
END //

DELIMITER ;

-------------------------------------------
-- addUser : add a user -------------------
-------------------------------------------

DELIMITER //

CREATE OR REPLACE PROCEDURE addUser(
  IN p_name VARCHAR(255),
  IN p_lastname VARCHAR(255),
  IN p_email VARCHAR(255),
  IN p_password VARCHAR(255),
  IN p_actif TINYINT(1)
)
BEGIN
  INSERT INTO user (name, lastname, email, password, actif)
  VALUES (p_name = name, p_lastname = lastname, p_email = email, p_password = SHA2(p_password, 512), p_actif);
END //

DELIMITER ;

-------------------------------------------
-- deleteUser : delete user with an id ----
-------------------------------------------

DELIMITER // 

CREATE OR REPLACE PROCEDURE deleteUser(
  IN p_user_id INT(11)
)
BEGIN
  DELETE FROM user WHERE p_user_id = user_id;
END //

DELIMITER ;

-------------------------------------------
-- updateUser : update user with an id ----
-------------------------------------------

DELIMITER //

CREATE OR REPLACE PROCEDURE updateUser(
  IN p_user_id INT(11),
  IN p_name VARCHAR(255),
  IN p_lastname VARCHAR(255),
  IN p_email VARCHAR(255),
  IN p_password VARCHAR(255),
  IN p_actif TINYINT(1) 
)
BEGIN
  UPDATE user SET p_name = name, p_lastname = lastname, p_email = email, p_password = SHA2(p_password, 512), p_actif = actif
  WHERE p_user_id = user_id;
END //

DELIMITER ;

-- EOF --