// Chargement des variables d'environement
require('dotenv-flow').config();
const { NODE_ENV, PORT } = process.env;

// Création du server Express
const express = require('express');
const homeRouter = require('./routers/home.router');
const app = express();

// Ajoute des routes
app.use(homeRouter);

// Exemple de chainage de route
app.get('/chainage', (req, res, next) => {
    console.log('Chainage 1');
    next();
    
    console.log('Chainage Render');
    res.send('<h1>Chainage</h1>')
});

app.get('/*', (req, res) => {   
    console.log('Chainage 2'); 
});


// Demarrage du server
app.listen(PORT, () => {
    console.log(`Server up on port ${PORT} in ${NODE_ENV} mode`);
});