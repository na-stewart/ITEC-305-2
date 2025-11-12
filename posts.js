const express = require('express');
const server = express.Router();


server.get('/posts', (req, res) => {
    res.send("All posts.")
})

server.get('/new-posts', (req, res) => {
    res.send("New posts.")
})

module.exports = Router;