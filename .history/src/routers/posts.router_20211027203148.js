const express = require('express')
const router = express.Router()

// load model
const Post = require('../models/post.model')
//test
router.get('/', (req,res) => {
		res.send('This is Router Posts')
})
module.exports = router