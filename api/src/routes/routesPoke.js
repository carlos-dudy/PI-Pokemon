const { Router } = require("express");
// const { Pokemon, Types } = require('../db');
const router = Router();
const {getPokeByApi, getPokebyId, postPokemon} = require('./routesAll')


router.get('/', getPokeByApi);

router.get('/:id', getPokebyId); 

router.post('/', postPokemon);



module.exports = router