const express = require('express');
const router = express.Router();


router.get('/users', (req, res) => {
    res.send("Users")
})

router.get('/new-users', (req, res) => {
    res.send("New Users")
})

module.exports = router;