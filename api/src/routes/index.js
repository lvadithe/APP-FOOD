const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const recipesRouter = require('./recipes');
const recipeRouter = require('./recipe');
const typesRouter = require('./types');

router.use('/recipes', recipesRouter);
router.use('/recipe', recipeRouter);
router.use('/types', typesRouter);


module.exports = router;