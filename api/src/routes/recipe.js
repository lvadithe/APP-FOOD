const { Router } = require('express');
const { post } = require('../controllers/recipeControllers');

const router = Router();

router.post('/', post)

module.exports = router;