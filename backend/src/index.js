const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')


const app = express()




mongoose.connect('mongodb+srv://admindbs:admindbs@mapecoins-rqnol.mongodb.net/week10?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json())
app.use(routes)

// Métodos HTTP: GET, POST, PUT, DELETE

//



app.get('/', (request, response) =>{

    return response.json({message: 'Hello OmniStack'})

})


app.listen(3333);