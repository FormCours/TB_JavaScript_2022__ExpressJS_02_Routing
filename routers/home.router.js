const express = require('express');
const homeController = require('../controllers/home.controller');

// Création d'un router pour la "zone" home
const homeRouter = express.Router();

// Ajout des routes vers les méthodes du controller
homeRouter.get('/', homeController.index);
homeRouter.get('/contact', homeController.contact);
homeRouter.get('/number/:nb(-?[0-9]+)', homeController.number);


module.exports = homeRouter;