const { Recipe, Diet } = require('../db')

const post = async (req, res) => {
    try {
        const { name, summary, score, healthScore, image, steps } = req.body;

        const newRecipe = await Recipe.create({
            name,
            summary,
            score,
            image,
            healthScore: healthScore,
            steps: steps
        });

        let dietTypesRecipeDb = await Diet.findAll({
            where: {name: name}
        })
        
        newRecipe.addDiet(dietTypesRecipeDb)
        
        res.send('¡Receta creada con éxito!')
    } catch (e) {
        res.send(e);
    }
};

module.exports = {
    post
}
