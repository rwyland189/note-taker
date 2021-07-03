// require express
const express = require('express');

// use heroku port or default
const PORT = process.env.PORT || 3001;

// require path
const path = require('path');

// instantiate the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming json data
app.use(express.json());

// create a route that front-end can request data from
const { db } = require('./db/db');

// instruct server to make certain files readily available
app.use(express.static('public'));

// function that returns single note object
function findById(id, dbArray) {
    const result = dbArray.filter(note => note.id === id)[0];
    return result;
}

// add route to view db json data
app.get('/api/notes', (req, res) => {
    res.json(db);
});

// get specific note
app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, db);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// routes to serve index.html, can't get * to work (doesn't go to notes.html once get started btn is clicked)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// route to serve notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// create route on server that accepts data to be used or stored server-side
app.post('/api/notes', (req, res) => {
    // req.body is where incoming content will be
    res.json(req.body);
});

// chain listen() method onto our server
app.listen(PORT, () => {
    console.log(`API server on ${PORT}`);
});