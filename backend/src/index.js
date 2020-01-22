const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
require('dotenv').config
// ({path: '../../config.env'})


//dotenv


//conexao com mongodb 
mongoose.connect('mongodb+srv://admindbs:admindbs@mapecoins-rqnol.mongodb.net/week10?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //remove warning de collection.ensureIndex is deprecated
    // useCreateIndex: true
})

const app = express()
app.use(express.json())
app.use(routes)
app.listen(3333)