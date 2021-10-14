import {
    GET_POKEMONS, GET_TYPES, ORDER_BY_NAME, GET_POKEMON_NAME, FILTER_BY_TYPE,
    ORDER_BY_ATTACK, GET_ID , FILTER_BY_CREATED, CLEAN_TYPES, CLEAN_ID, POST_POKEONS
} from '../actions/constantes'

const initialState = {
    pokemons: [],
    copiaPokemons: [],
    types: [],
    detalleId: {}

}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS: {
            return {
                ...state,
                pokemons: action.payload,
                copiaPokemons: action.payload,
            }
        }

        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }

        case GET_ID:
            return {
                ...state,
                detalleId: action.payload
            }

        case GET_POKEMON_NAME: {
            return {
                ...state,
                pokemons: action.payload
            }
        }


        case FILTER_BY_TYPE: {
            const allPokemons= state.copiaPokemons
            const filter = allPokemons.filter(el => (el.types[1]) ? el.types[1].name  === action.payload : el.types[0].name === action.payload)
            return {
                ...state,
                pokemons: action.payload === "all"? allPokemons : filter
            }
        }

        case FILTER_BY_CREATED: {
            const allPokemons = state.copiaPokemons
            const filtrado = action.payload === 'creados' ? allPokemons.filter(el => typeof(el.id) !== 'number') : allPokemons.filter(el=> typeof(el.id) === 'number') 
            return {
                ...state,
                pokemons: action.payload === "all"? state.copiaPokemons : filtrado
            }
        }

        case ORDER_BY_NAME: {
            let sortedPokemons = action.payload === 'A-Z' ?
                state.copiaPokemons.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    } else if (b.name > a.name) {
                        return -1
                    }
                    return 0;

                }) : state.copiaPokemons.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    } else if (b.name > a.name) {
                        return 1
                    }
                    return 0;
                })
            return {
                ...state,
                pokemons: sortedPokemons
            }
        }

        case ORDER_BY_ATTACK: {

            let sortedPokemons = action.payload === 'Asc' ?
                state.copiaPokemons.sort(function (a, b) {
                    if (a.attack > b.attack) {
                        return 1
                    } else if (b.attack > a.attack) {
                        return -1
                    }
                    return 0;

                }) : state.copiaPokemons.sort(function (a, b) {
                    if (a.attack > b.attack) {
                        return -1
                    } else if (b.attack > a.attack) {
                        return 1
                    }
                    return 0;
                })
            return {
                ...state,
                pokemons: sortedPokemons
            }
        }

        case POST_POKEONS:
            return {
                ...state,
            }

        case CLEAN_TYPES:
            return {
                ...state,
                types: []
            }
        case CLEAN_ID:
            return {
                ...state,
                detalleId: action.payload
            }

        default: {
            return state
        }
    }
}


export default rootReducer