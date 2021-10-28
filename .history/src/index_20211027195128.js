const express = require('express')
const app = express()
//DB
const connectDB = require('../config/db')
//Morgan
const morgan = require('morgan');
//lay Posts
const posts = require('./routers/posts')
//start express middleware
app.use(express.json())
//use morgan
app.use(morgan('combined'));
//Test
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//connect database
connectDB()
//Test Post


const PORT = 5000
app.listen(PORT, () => console.log(`start server in port http://localhost:${PORT}`))
