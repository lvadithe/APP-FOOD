const { Diet } = require('../db')

const types = async (req, res, next) => {
    const diets = [
        "gluten free",
        "dairy free",
        "paleolithic",
        "ketogenic",
        "lacto ovo vegetarian",
        "vegan",
        "pescatarian",
        "primal",
        "fodmap friendly",
        "whole 30",
    ]

    diets.forEach(el => {
        Diet.findOrCreate({
            where: { name: el }  //por cada tipo de dieta
        })
    })

    const allTypes = await Diet.findAll()
    res.send(allTypes)
};

module.exports = {
    types
}
