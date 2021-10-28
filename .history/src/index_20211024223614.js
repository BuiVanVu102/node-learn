const express = require('express')
//create app 
const app = express()

//start express middleware
app.use(express.json())

app.get('/', (res, req) => {
	res.send('Hello Life is very bad')
})

const PORT = 5000

app.listen(PORT, () => console.log(`start server in port http://localhost:${port`))
