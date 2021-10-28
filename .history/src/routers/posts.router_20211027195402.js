const express = require('express')
const router = express.Router()

// load model

//test
router.get('/', (req,res) => {
		res.send('This is Router Posts')
})
module.exports = router