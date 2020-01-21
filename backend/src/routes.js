
const { Router } = require('express')
const PointSchema = require('./models/utils/PointSchema')
const DevController = require('./controllers/DevController')


const routes = Router()
//importando model dos devs

routes.post('/devs', DevController.store );
    

module.exports = routes

// Métodos HTTP: GET, POST, PUT, DELETE
//Query Params: request.query (filtros, ordenação, paginação, ...) 
//Route Params: request.params (Identificar um recurso )
//Body: request.body (dados para criação ou alteração de um registro)