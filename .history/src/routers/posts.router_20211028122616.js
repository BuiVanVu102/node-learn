const express = require('express')
const router = express.Router()

// load model
const Post = require('../models/post.model')
//post add
router.get('/add', (req,res) => {
		res.render('posts/add')
})
//show list post
router.get('/', async (req, res) => {
	const listPosts = await Post.find().lean().sort({date: -1})
	res.render('/posts/index')
})

//create new post
router.post('/', async (req, res)=>{
	const {title, description } = req.body

	let error = []

	if (!title) error.push({msg: 'Title require'})
	if (!description) error.push({msg: 'Description require'})
	if(error.length > 0 ) res.render('posts/add', {title, description})
	else {
		const newPostData = {title, description}
		const newPost = new Post(newPostData)
		await newPost.save()
		res.redirect('/posts')
	}
})
module.exports = router