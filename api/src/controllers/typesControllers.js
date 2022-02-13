const { Diet } = require('../db')
const axios = require('axios');

const { API_KEY } = process.env;
require('dotenv').config();

const types = async (req, res) => {

    try {

        const allData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=30&addRecipeInformation=true`);
        const allInfo = allData.data.results.map(e => e.diets)

        const diets = allInfo.join(",").split(",");
        /* const cont = []; */

        for (let i = 0; i < diets.length; i++) {
            await Diet.findOrCreate({
                where: {
                    name: diets[i]
                }
            })
        };

        const dietsTypes = await Diet.findAll();

        /* dietsTypes.forEach(el => {
            if (el.name.length !== 0) {
                cont.push(el)
            }
        }); */

        res.status(200).send(dietsTypes);
    
    } catch {
        return res.status(400).send('Invalid input.')
    };

};

module.exports = {
    types
}
