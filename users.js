const express = require('express');
const server = express.Router();


server.get('/users', (req, res) => {
    res.send("Users")
})

server.get('/new-users', (req, res) => {
    res.send("New Users")
})

module.exports = Router;