const express = require('express')
const mongoose = require('mongoose')

const dbURI = 'mongodb+srv://vicky:6380880446kcs@nodetuts.0htg2.mongodb.net/studentDB?retryWrites=true&w=majority'

const app = express()
app.use(express.json())

mongoose.connect(dbURI,{useNewUrlParser:true , useUnifiedTopology:true})
.then((result) => app.listen(7000,()=>{console.log("i am working")}))
.catch((err) => console.log(err))


//route
const studentRouter = require('../CrudJS/app/routes/students');
app.use('/students',studentRouter)
