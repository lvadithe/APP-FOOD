const { Router } = require('express');
const { types } = require('../controllers/typesControllers');

const router = Router();

router.get('/', types)


module.exports = router;