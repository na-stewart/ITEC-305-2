const express = require('express')
const router = express.Router()

// @desc   Get all posts
// @route  GET /posts
router.get('/', (req, res) => {
  res.send('All posts')
})

// @desc   Get new posts
// @route  GET /posts/new
router.get('/new', (req, res) => {
  res.send('New posts')
})

module.exports = router