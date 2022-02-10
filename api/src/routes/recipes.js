const { Router } = require('express');
const { get, recipeId } = require('../controllers/recipesControllers');

const router = Router();

router.get('/', get)
router.get('/:id', recipeId)

module.exports = router;