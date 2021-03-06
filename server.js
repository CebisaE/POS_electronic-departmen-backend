require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db = mongoose.connection
db.on ('error',(error) => console.error(error))
db.once ('open',() => console.log('connected to database'))


app.use(express.json())
const usersRouter = require ('./routes/users')
app.use('/users',usersRouter)


app.listen(process.env.PORT ||5000,() => console.log('server has started'))