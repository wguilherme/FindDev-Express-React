
const { Router } = require('express')
const axios = require('axios')
const Dev = require('./models/Dev')

const routes = Router()
//importando model dos devs

routes.post('/devs', async (request, response) =>{
    const { github_username, techs} = request.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    //name = login quer dizer que, caso ele não tenha o dado name, o valor name padrão será igual ao do login
    const { name = login, avatar_url, bio} = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim())

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray
    })

    
    return response.json(dev)

});
    

module.exports = routes

// Métodos HTTP: GET, POST, PUT, DELETE
//Query Params: request.query (filtros, ordenação, paginação, ...) 
//Route Params: request.params (Identificar um recurso )
//Body: request.body (dados para criação ou alteração de um registro)