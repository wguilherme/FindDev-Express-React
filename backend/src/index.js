const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
require('dotenv').config
// ({path: '../../config.env'})

const app = express()


//conexao com mongodb 
mongoose.connect('mongodb+srv://admindbs:admindbs@mapecoins-rqnol.mongodb.net/week10?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //remove warning de collection.ensureIndex is deprecated
    // useCreateIndex: true
})
app.use(cors())
// app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json())
app.use(routes)

app.listen(3333)