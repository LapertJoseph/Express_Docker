/**
 * Création d'un fichier répertoriant toute les routes 
 * liés a l'utilisateur
 */

const express = require('express');
const get = require('../controllers/user/get');

const router = express.Router();

router.get("/users", get);



module.exports = router;
