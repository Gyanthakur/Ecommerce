const connectToMongo = require("./db");
// connectToMongo()

const cors = require("cors");

const express = require('express')
const app = express()
const port = 5000

app.use(cors())

app.use(express.json())
app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})