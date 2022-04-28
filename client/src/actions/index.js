import axios from 'axios';
import {
    GET_POKEMONS, GET_TYPES, ORDER_BY_NAME, GET_POKEMON_NAME, FILTER_BY_TYPE,
    ORDER_BY_ATTACK, GET_ID, FILTER_BY_CREATED
} from './constantes'

const URL = "http://localhost:8080"

// traer toda la data de la api
export function getPokemons() {
    return async function (dispatch) {
        var poke = await axios.get(URL + '/pokemons')
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
            let pokemon = await axios.get(URL +"/pokemons?name=" + name)
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
export function  getIds(id) {
    return async (dispatch) => {
        try {

            let urlId = await axios.get(URL + '/pokemons/' + id)
            dispatch({
                type: GET_ID,
                payload: urlId.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

// traemos los types de pokemones
export function getTypes() {
    return async function (dispatch) {
        let type = await axios.get(URL + '/type')
        dispatch({
            type: GET_TYPES,
            payload: type.data
        })
    }
}

// ruta para crear Pokemon
export function postPokemon(payload) {
    return async function (dispatch) {
        const response = await axios.post(URL + '/pokemons', payload)
        console.log(response)
        return response;
    }
}


// filtramos por type
export function filterByType(payload) {
    // console.log(payload)
   
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


