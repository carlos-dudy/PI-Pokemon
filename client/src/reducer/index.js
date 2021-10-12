import {
    GET_POKEMONS, GET_TYPES, ORDER_BY_NAME, GET_POKEMON_NAME, FILTER_BY_TYPE,
    ORDER_BY_ATTACK, GET_ID , FILTER_BY_CREATED, CLEAN_TYPES, CLEAN_ID, POST_POKEONS
} from '../actions/constantes'

const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    detalleId: {}

}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS: {
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
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
            const filter = action.payload === 'all' ? state.allPokemons : state.allPokemons.filter(el => el.types.includes(action.payload))

            return {
                ...state,
                pokemons: filter,
            }
        }

        case FILTER_BY_CREATED: {
            const allPokemons = state.allPokemons
            const filtrado = action.payload === 'creados' ? allPokemons.filter(el => el.createdInDb) : allPokemons.filter(el => !el.createdInDb);
            return {
                ...state,
                pokemons: action.payload === "all"? state.allPokemons : filtrado
            }
        }

        case ORDER_BY_NAME: {
            let sortedPokemons = action.payload === 'A-Z' ?
                state.allPokemons.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    } else if (b.name > a.name) {
                        return -1
                    }
                    return 0;

                }) : state.allPokemons.sort(function (a, b) {
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
                state.pokemons.sort(function (a, b) {
                    if (a.attack > b.attack) {
                        return 1
                    } else if (b.attack > a.attack) {
                        return -1
                    }
                    return 0;

                }) : state.pokemons.sort(function (a, b) {
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