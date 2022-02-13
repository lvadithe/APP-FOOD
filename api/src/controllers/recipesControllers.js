const data = require('../apiInfo/allData')

const get = async (req, res) => {

    try {

        const { name } = req.query;
        const recipesAll = await data.allData();

        if (name) {

            let recipesName = await recipesAll.filter(
                e => e.name.toLowerCase().includes(name.toLowerCase()));

            recipesName.length ?
                res.status(200).send(recipesName) :
                res.status(400).send('There is no recipe you are looking for.');

        } else {
            res.status(200).send(recipesAll)
        }

    } catch {
        return res.status(400).send('invalid input');
    }

};

const recipeId = async (req, res) => {

    try {

        const { id } = req.params;
        const recipeIds = await data.allData()

        if (id) {
            let recipeID = await recipeIds.filter(e => e.id == id)
            recipeID.length ?
                res.status(200).send(recipeID) :
                res.status(404).send('No Recipe Found.')
        }

    } catch {
        return res.status(400).send('invalid input');
    }

};


module.exports = {
    get,
    recipeId
}