
const axios = require('axios')
const Dev = require('../models/Dev')

//importar util, parseStringAsArray
const parseStringAsArray = require('../utils/parseStringAsArray')


// index, show, store, update, destory
// index -> lista, show -> único

module.exports = {
    //função list Index GET

    async index (request, response){
        const devs = await Dev.find()
        return response.json(devs)
    },

    //função store POST
    async store (request, response) {
        const { github_username, techs, latitude,  longitude } = request.body;

        //verificar se já existe usuário - user repetido based on username
        //retorna null caso não encontrar nenhum dev com o username informado
        let dev = await Dev.findOne({ github_username})

        //se não existe (null)
        if (!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            console.log('função ok')
            
            //name = login quer dizer que, caso ele não tenha o dado name, o valor name padrão será igual ao do login
            const { name = login, avatar_url, bio} = apiResponse.data;
            
           
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

        } else {
            response.status(400);
            response.json({error: 'O Username do Github informado já está cadastrado'});
        }

        return response.json(dev)
    
    }
}