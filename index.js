const express = require('express');
const server = express();
const port = 3000;

server.listen(port, function (){
    console.log(`Listening on ${port}`)
});

server.get('/index', (req, res) => {
    res.render("index.html", { user: 'Valued user' })
})

server.get('/', (req, res) => {
    res.status(200).send("Hello world!");
})
