/**
 * Création d'un fichier répertoriant toute les routes 
 * liés a l'utilisateur
 */

const express = require('express');
const get = require('../controllers/user/get');
const post = require('../controllers/user/post');

const router = express.Router();

router.get("/users", get);

router.post("/user", post);

module.exports = router;
