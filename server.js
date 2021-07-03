// require express
const express = require('express');

// use heroku port or default
const PORT = process.env.PORT || 3001;

// instantiate the server
const app = express();

// create a route that front-end can request data from
const { db } = require('./db/db');

// add route to view db json data
app.get('/api/db', (req, res) => {
    res.json(db);
});

// chain listen() method onto our server
app.listen(PORT, () => {
    console.log(`API server on ${PORT}`);
});