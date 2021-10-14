import axios from 'axios';
import {
    GET_POKEMONS, GET_TYPES, ORDER_BY_NAME, GET_POKEMON_NAME, FILTER_BY_TYPE, GET_DISPLAYS,
    ORDER_BY_ATTACK, GET_ID, CLEAN_ID, FILTER_BY_CREATED
} from './constantes'


// traer toda la data de la api
export function getPokemons() {
    return async function (dispatch) {
        var poke = await axios.get('http://localhost:3001/pokemons')
        dispatch({
            type: GET_POKEMONS,
            payload: poke.data
        })

    }
}


// Busque por nombre
export function getPokemonByName(name) {
    return async function (dispatch) {
        try {
            let pokemon = await axios.get("http://localhost:3001/pokemons?name=" + name)
            return dispatch({
                type: GET_POKEMON_NAME,
                payload: pokemon.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

// mostramos pokemon por ID- Pokemon Detalles
export function getIds(id) {
    return async (dispatch) => {
        try {

            let urlId = await axios.get('http://localhost:3001/pokemons/' + id)
            dispatch({
                type: GET_ID,
                payload: urlId.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

// traemos los types de pokemones
export function getTypes() {
    return async function (dispatch) {
        let type = await axios.get('http://localhost:3001/type')
        dispatch({
            type: GET_TYPES,
            payload: type.data
        })
    }
}

// ruta para crear Pokemon
export function postPokemon(payload) {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/pokemons', payload)
        console.log(response)
        return response;
    }
}


// filtramos por type
export function filterByType(payload) {
    console.log(payload)
   
    return {
        type: FILTER_BY_TYPE,
        payload
    }
    
}


//ordenamos por orden alfabetico 
export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

//Ordenamos por ataque
export function orderByAttack(payload) {
    return {
        type: ORDER_BY_ATTACK,
        payload
    }
}
// Filtro por Creados o Existentes
export function filterbyCreated(payload) {
    return {
        type: FILTER_BY_CREATED,
        payload
    }
}



//-----------------------------------------------------------------------------------------------------

export const cleanId = () => (dispatch) => {
    let rest = {};
    dispatch({
        type: CLEAN_ID,
        payload: rest
    })
}

export const clearState = (payload) => {
    return (dispatch) =>
        dispatch({
            type: GET_DISPLAYS,
            payload: payload
        })
}

export const getDisplay = (payload) => {
    return (dispatch) =>
        dispatch({
            type: GET_DISPLAYS,
            payload: payload
        })
}
