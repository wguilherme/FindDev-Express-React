
const axios = require('axios')
const Dev = require('../models/Dev')


module.exports = {
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
            
           
            const techsArray = techs.split(',').map(tech => tech.trim())
        
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
            response.send('O Username do Github informado já está cadastrado');
        }

        return response.json(dev)
    
    }
}