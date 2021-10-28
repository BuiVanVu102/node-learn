const express = require('express')
const router = express.Router()

// load model
const Post = require('../models/post.model')
//test
router.get('/add', (req,res) => {
		res.render('posts/add')
})

//create new post
router.post('/', (req, res)=>{
	const {title, description } = req.body

	let error = []

	if (!title) error.push({msg: 'Title require'})
	if (!description) error.push({msg: 'Description require'})
	if(error.length > 0 ) res.render('posts/add', {title, description})
	else {
		const newPostData = {title, description}
	}
})
module.exports = router