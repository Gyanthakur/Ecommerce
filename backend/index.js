const connectToMongo = require("./db");
// connectToMongo()


const express = require('express')
const app = express()
const port = 5000

const cors = require("cors");
app.use(express.json())
app.use(cors())

app.get("/",(req,res) =>
{
  return res.json("API running successfully")
})
app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})