const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routerPoke = require('./routesPoke')
const routerTypes = require('./routesTypes')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/pokemonsAPP', pokeRutes)

router.use('/pokemons', routerPoke)

router.use('/type', routerTypes)

module.exports = router;
