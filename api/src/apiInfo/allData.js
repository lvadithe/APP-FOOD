const axios = require('axios');
const { Recipe, Diet } = require('../db');

const { API_KEY } = process.env;
require('dotenv').config();

const allApiData = async () => {

    const aUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=30&addRecipeInformation=true`);
    const aInfo = await aUrl.data.results.map(e => {

        return {
            id: e.id,
            name: e.title,
            image: e.image,
            score: e.spoonacularScore,
            dishTypes: e.dishTypes.map((d) => { return { name: d } }),    //es un arreglo, utilizo e map para que me devuelva todos
            diets: e.diets.map((d) => { return { name: d } }),
            summary: e.summary,
            healthScore: e.healthScore,
            steps: e.analyzedInstructions
        }

    })

    return aInfo
};

const allDbData = async () => {

    return await Recipe.findAll({
        include: {              //  eager loading on a model with a Belongs-to-Many relationship
            model: Diet,        //  join con la tabla Diet
            attibutes: ['name'],//  con el atributo 'name' de dicha tabla
            through: {
                attibutes: [],   //  trae los atributos indicados, si no me trae todos
            }
        } // sin hacer esta comprobacion los trae igual, pero la idea es hacerla para traer solo ese atributo
    })

}; // more at: https://sequelize.org/master/manual/eager-loading.html#eager-loading-with-many-to-many-relationships


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