// require express
const express = require('express');

// instantiate the server
const app = express();

// chain listen() method onto our server
app.listen(3001, () => {
    console.log('API server on port 3001');
});