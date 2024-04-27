const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const dburl = "mongodb+srv://2200030023:admin@cluster0.x0ki0c4.mongodb.net/movie"
// const dburl = process.env.mongodburl
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully!")
}).catch((err) => {
    console.log(err.message)
});
const app = express() 
app.use(cors())
app.use(express.json())
const feedbackrouter = require("./routes/feedbackroutes")
app.use("",feedbackrouter)
const port =2014
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})