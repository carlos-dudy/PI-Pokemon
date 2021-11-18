const { Pokemon, Type } = require('../db');
const axios = require('axios');


// En caso de buscar por nombre primero consultamos en la DB
const getPokeByApi = async (req, res) => {
    let name = req.query.name;
    try {
        if (name !== undefined && name && name !== '') {
            let pokemon = {};
            pokemon = await Pokemon.findOne({
                where: { name },
                include: {
                    model: Type,
                    attributes: ['name']
                }
            })
            let array = [pokemon]
            // en caso de no estar, se cpnsulta a la API, mostramos solo la informacion requerida
            if (array[0]) res.json(array);

            else {
                const url = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);

                if (url) {
                    let pokemon = {
                        id: url.data.id,
                        name: url.data.name,
                        img: url.data.sprites.other.dream_world.front_default,
                        hp: url.data.stats[0].base_stat,
                        attack: url.data.stats[1].base_stat,
                        defense: url.data.stats[2].base_stat,
                        speed: url.data.stats[5].base_stat,
                        height: url.data.height,
                        weight: url.data.weight,
                    }


                    //mapeamos en caso de tener mas de un tipo.
                    let types = url.data.types.map(el => el.type)
                    pokemon = { ...pokemon, types: types }
                    let array = [pokemon];


                    res.json(array);
                }
            }
        }



        // mostrar toda la informacion de la api y la limitamos en 40. 
        const urlApi = await axios.get('http://pokeapi.co/api/v2/pokemon?limit=40');

        const db = await Pokemon.findAll({
            attributes: ['name', 'img', 'attack', 'defense', 'id'],
            include: {
                model: Type,
                attributes: ['name']
            }
        });
        let details = await Promise.all(urlApi.data.results.map(async poke => await axios(poke.url)));
        details = details.map(poke => {
            let newPokemon = {
                id: poke.data.id,
                name: poke.data.name,
                img: poke.data.sprites.other.dream_world.front_default,
                attack: poke.data.stats[1].base_stat,
                defense: poke.data.stats[2].base_stat,

            }
            //     let types = poke.data.types.map(poke => poke.type);
            //     types.map(poke => delete poke.url)
            //     return newPokemon = {...newPokemon, types: types};
            // })

            let types = poke.data.types.map(poke => poke.type);
            types.map(poke => delete poke.url)

            // let ver = types.map(poke => Object.values(poke))
            // let newTypes = ver.flat()
            return newPokemon = { ...newPokemon, types: types };
        })

        details = details.concat(db);
        res.json(details)
    } catch (e) {
        console.log(e)
    }
}
// buscar Pokemons por Id
const getPokebyId = async (req, res) => {
    const id = req.params.id;
    // Si Id no esta, o es un numero menor a 0, se envia el error
    if (!id || parseInt(id) < 0) res.status(404).json('No existe el ID');
    try {
        // Si el id no incluye "-", lo buscamos en la api
        if (!id.includes('-')) {
            const urlId = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id);

            let pokemon = {
                id: urlId.data.id,
                name: urlId.data.name,
                img: urlId.data.sprites.other.dream_world.front_default,
                hp: urlId.data.stats[0].base_stat,
                attack: urlId.data.stats[1].base_stat,
                defense: urlId.data.stats[2].base_stat,
                speed: urlId.data.stats[5].base_stat,
                height: urlId.data.height,
                weight: urlId.data.weight,
            }

            let temp = [];
            let types = urlId.data.types.map(el => {
                temp.push(el.type)
                return temp
            });

            pokemon = { ...pokemon, types: temp };
            return res.json(pokemon);

        }
        // si no cumple con las condiciones anterioes, se busca en la base de datos
        else {
            const pokemon = await Pokemon.findByPk(String(id), {
                include: {
                    model: Type,
                    attributes: ['name']
                }
            });
            if (pokemon) return res.json(pokemon);
            else {
                res.status(400).json('No existe el ID')
            }
        }
    } catch (e) {
        console.log(e)
    }
}

const getTypes = async (req, res ) => {
    try {
        const alltypes = await Type.findAll()
        if (alltypes.length > 1) res.json(alltypes)
        else {
            await axios.get("https://pokeapi.co/api/v2/type")
            .then ( async (el) => {
                for(let i of el.data.results){
                    let name = i.name
                    await Type.create({name})
                }
            })
            Type.findAll()
            .then(types =>{
                res.json(types)
            })
        }
    }
        catch (error){
            res.status(500).send(error.message)
        }
    
};


const postPokemon = async (req, res) => {
    let { name, img, hp, attack, defense, speed, height, weight, types } = req.body;
    console.log(types)
    if (!name) return res.status(404).json('Nombre es Requerido');

    name = name.toLowerCase();
    let newPokemon = await Pokemon.create({
        name,
        img,
        hp,
        attack,
        defense,
        speed,
        height,
        weight
    });
    let typeDb = await Type.findAll({
        where: { name: types }
    })
    // console.log(typeDb)

    newPokemon.addType(typeDb)
    res.json(newPokemon)
}


module.exports = { getPokeByApi, getPokebyId, postPokemon, getTypes }