/**
 * Création d'un fichier répertoriant toute les routes 
 * liés a l'utilisateur
 */

const express = require('express');
const get = require('../controllers/user/get');
const post = require('../controllers/user/post');
const del = require('../controllers/user/del');
const put = require("../controllers/user/put");


const router = express.Router();

router.get("/users", get);
router.post("/user", post);
router.delete("/user", del);
router.put("/user", put);



module.exports = router;