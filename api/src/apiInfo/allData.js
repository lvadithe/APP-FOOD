const axios = require('axios');
const { Recipe, Diet } = require('../db');

const { API_KEY } = process.env;
require('dotenv').config();

const allApiData = async () => {

    const aUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=15&addRecipeInformation=true`);
    const aInfo = await aUrl.data.results.map(e => {

        return {
            id: e.id,
            name: e.title,
            image: e.image,
            score: e.spoonacularScore,
            dishTypes: e.dishTypes.map((e) => { return { name: e } }),    //es un arreglo, utilizo e map para que me devuelva todos
            diets: e.diets.map((e) => { return { name: e } }),
            summary: e.summary,
            healthScore: e.healthScore,
            steps: e.analyzedInstructions[0]?.steps.map(e => {
                return `${e.number} - ${e.step}`
            })
        }
    })

    return aInfo
};

const allDbData = async () => {

    return await Recipe.findAll({

        include: {              
            model: Diet,        
            attributes: ['name'],
            through: {
                attributes: []   
            }
        }

    })

}; 

const allData = async () => {

    const apiData = await allApiData();
    const dbData = await allDbData();
    const allDataContainer = apiData.concat(dbData);

    return allDataContainer

};


module.exports = {

    allData,
    allDbData,
    allApiData
    
};