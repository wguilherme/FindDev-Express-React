const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')
//buscar todos devs num radio de 10kkm
//filtrar por tecnologias

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
        })



        
  
        return response.json({ devs })
    }
}