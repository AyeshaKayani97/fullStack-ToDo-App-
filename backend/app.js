
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
require("dotenv").config()
const router = require("./routes/todo")

// const userModel = require("./models/User")

app.use(express.json())
app.use(cors())

// app.use(express.urlencoded({ extended: true }));
// connectDatabase()
// const router = require("./routes/auth")
// app.use(router)
// const port = process.env.PORT
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(data => console.log("connection successful"))
.catch(error =>console.log("connection failed"))
// port = 3001

app.use(router)

app.listen(process.env.PORT, ()=>{
console.log(`listening to port ${process.env.PORT}`)
})



