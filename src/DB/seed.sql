INSERT INTO user (name, lastname, email, password, actif) VALUES 
("Superadmin", "", "Superadmin@gmail.com", SHA2("coucou", 512), 1),
("Lapert", "Joseph", "lajospeh@gmail.com", SHA2("Maszala", 512), 1),
("Leroy", "Guillaume", "gleroy@gmail.com", SHA2("Gleroy", 512), 1),
("Blondon", "Ludovic", "blonludo@gmail.com", SHA2("Lblondon", 512), 1),
("David", "Matthieu", "davmatt@gmail.com", SHA2("Mdavid", 512), 1);