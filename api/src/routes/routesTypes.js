const { Router } = require('express');
const { getTypes } = require('./routesAll.js')
const router = Router();


router.use('/', getTypes)

module.exports = router