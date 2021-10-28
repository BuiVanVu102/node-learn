const express = require('express')
//create app 
const app = express()

//start express middleware
app.use(express.json())

const PORT = 5000

app.listen(PORT, () => console.log(`start server in port ${PORT}`))
