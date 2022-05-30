const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require("./routes/auth");
const serviceRoute = require('./routes/services')
const enrollmentRoute = require('./routes/enrollment')

app.use(express.json());
app.use(cors())

dotenv.config();


mongoose.connect(process.env.MONGO_URI
    ).then(console.log("connected to mongodb")
).catch((err)=> console.log(err));


app.use("/api/auth",authRoute) ;

// app.use("/api/users",usersRoute) ;

app.use("/api/service",serviceRoute)

app.use("/api/enroll",enrollmentRoute)

app.get("/",(req,res) =>{
    res.send("Hello from project website")
})

app.listen(process.env.PORT || 4003,(req,res) =>{
    console.log("App is runnig");
})