const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query
        const techsArray = parseStringAsArray(techs);

        console.log(techsArray)
        //buscar todos devs num radio de 10kkm
        //filtrar por tecnologias
        return response.json({ devs: [] })
    }
}