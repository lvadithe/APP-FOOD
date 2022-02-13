const { Recipe, Diet } = require('../db')

const post = async (req, res) => {
    
    try {

        const { name, summary, score, healthScore, steps, image, diets } = req.body;
        const newRecipe = await Recipe.create({
            name,
            summary,
            score,
            image,
            healthScore,
            steps
        });

        const dbDiet = await Diet.findAll({
            where: { name: diets }
        }) 

        newRecipe.addDiet(dbDiet); 
        res.status(201).send('Successfully created recipe')

    } catch {
        return res.status(400).send('Invalid input.')
    }

};

module.exports = {
    post
}

/* diets.forEach(async d => {
            const dbDiet = await Diet.findOrCreate({
                where: {
                    name: d
                }
            })
            newRecipe.addDiet(dbDiet[0]);
        }) */

/* const { diets } = req.body;

    const recipeCreated = await Recipe.create({
        name: req.body.name,
        summary: req.body.image,
        score: req.body.score,
        healthScore: req.body.healthScore,
        steps: req.body.steps,
        image: req.body.image,
    })

    const dietsDb = await Diet.findAll({
        where: {
            name: diets
        }
    });

    recipeCreated.addDiet(dietsDb);
    res.send(recipeCreated); */
