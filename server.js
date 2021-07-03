// require express
const express = require('express');

// instantiate the server
const app = express();

// create a route that front-end can request data from
const { db } = require('./db/db');

// add route to view db json data
app.get('/api/db', (req, res) => {
    res.json(db);
});

// chain listen() method onto our server
app.listen(3001, () => {
    console.log('API server on port 3001');
});