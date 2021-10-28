const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')
//use bodyParser
const bodyParser = require('body-parser')
//DB
const connectDB = require('../config/db')
//Morgan
const morgan = require('morgan');
//lay Posts
const posts = require('./routers/posts.router');
//start express middleware
app.use(express.json())
//start up bodyParser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//use morgan
app.use(morgan('combined'));
//use handlebars
app.engine('hbs', exphbs({extname: '.hbs'}))
app.set('view engine', 'hbs')
//set up model view
app.set('views', path.join(__dirname, 'views' ) )
//connect database
connectDB()
//one of the most post can use at router
app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))
//Test Post
app.use('/posts', posts)

const PORT = 5000
app.listen(PORT, () => console.log(`start server in port http://localhost:${PORT}`))
