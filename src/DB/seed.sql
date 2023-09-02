INSERT INTO user (name, lastname, email, password, actif) VALUES 
("Superadmin", "", "Superadmin@gmail.com", SHA2("coucou", 512), 1),
("Lapert", "Joseph", "lajospeh@gmail.com", SHA2("Maszala", 512), 1),
("Leroy", "Guillaume", "gleroy@gmail.com", SHA2("Gleroy", 512), 1),
("Blondon", "Ludovic", "blonludo@gmail.com", SHA2("Lblondon", 512), 1),
("David", "Matthieu", "davmatt@gmail.com", SHA2("Mdavid", 512), 1);

INSERT INTO card (card_name, card_monster_type, card_stars, card_attribute, card_attack, card_defense, card_effect, card_skill, card_image_url, card_text, user_id) VALUES
("Dark Magician", "Normal Monster", 7, "Dark", 2500, 2100, 0, null, "https://images.ygoprodeck.com/images/cards/46986414.jpg", "The ultimate wizard in terms of attack and defense.",  1),
("Red-Eyes Black Dragon", "Normal Monster", 7, "Dark", 2400, 2000, 0, null, "https://images.ygoprodeck.com/images/cards/74677422.jpg", "A ferocious dragon with a deadly attack.",  2),
("Blue-Eyes White Dragon", "Normal Monster", 8, "Light", 3000, 2500, 0, null, "https://images.ygoprodeck.com/images/cards/89631139.jpg", "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.", 3);