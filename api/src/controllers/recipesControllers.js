const model = require('../apiInfo/allData')

const get = async (req, res) => {
    try {
        const { name } = req.query // ESTE REQ BUSCA SI HAY POR NAME LA BUSQUEDA
        let recipesAll = await model.allData();
        //ACA COMPARAMOS LA BUSQUEDA CON EL NAME
        if (name) {
            let recipesName = await recipesAll.filter(p => p.name.toLowerCase().includes(name.toLowerCase()))
             //tolower case hace que la busqueda en minus o mayusc no afecte al resultado de la busqueda
            recipesName.length ? // sirve para preguntar si trajo algo la busqueda
                res.status(200).send(recipesName) :
                res.status(400).send('No existe la Receta que Busca.');
        } else {
            res.status(200).send(recipesAll)
        }
    } catch {
        return res.status(400).send('invalid input');
    }
};


const recipeId = async (req, res) => {
    const id = req.params.id;
    const recipes = await model.allData()
    if (id) {
        let recipeId = await recipes.filter(p => p.id == id)
        recipeId.length ?
            res.status(200).send(recipeId) :
            res.status(404).send('no se encontro la Receta Buscada')
    }
};


module.exports = {
    get,
    recipeId
}