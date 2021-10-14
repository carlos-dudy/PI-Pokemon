import React from 'react';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, filterByType, filterbyCreated, orderByName, orderByAttack, } from '../actions/index.js'
import { Link } from 'react-router-dom';
import Styles from './Home.module.css'
import Card from './Card.jsx'
import SearchPokemon from './SearchPokemon.jsx'
import Paginado from './Paginado.jsx'
import { FcRefresh } from "react-icons/fc";
import imgId from './imagenes/pokeId.png'


export default function Home() {

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const [orden, setOrden] = useState('') //me trae todo lo que esta en el estado pokemons
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(9)
    const indexOfLastPokemons = currentPage * pokemonsPerPage;
    const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage;
    const currentPokemons = Array.isArray(allPokemons) && allPokemons?.slice(indexOfFirstPokemons, indexOfLastPokemons);
    
    console.log(currentPokemons + "pokemon filtrado")

    const paginado = (pageNumbers) => {
        setCurrentPage(pageNumbers)
    }

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemons());
        setCurrentPage(1);
    }

    function handleFiltertype(e) {
        dispatch(filterByType(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }

    function handleFilterCreated(e) {
        e.preventDefault();
        dispatch(filterbyCreated(e.target.value));
        setCurrentPage(1);
    }
    function handleOrder(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }
    function handleAttack(e) {
        e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }


    return (
        < div className={Styles.Container}>
            <div className={Styles.menu}>
                <ul>
                    <li><h1>¡POKEMON MAGAZINE!</h1></li>
                    <li><SearchPokemon /></li>
                    <li><Link to='/create'><button className={Styles.bnt}>CREAR POKEMON</button></Link></li>
                    <li className={Styles.titulo}>
                        <li><button className={Styles.cargar} onClick={e => { handleClick(e) }}>
                            RECARGAR <FcRefresh />
                        </button>
                        </li>
                    </li>
                </ul>

                <ul>
                    <li>

                        <div className={Styles.filtrado}>

                            <div className={Styles.todos}>
                                <select className={Styles.select} onChange={(e) => handleOrder(e)} >
                                    <option value='all'> Orden Alfabetico: </option>
                                    <option value='A-Z'> A-Z </option>
                                    <option value='Z-A'> Z-A </option>
                                </select>
                                <div>


                                    <select className={Styles.select} onChange={(e) => handleAttack(e)} >
                                        <option value='all'>Ordenar por:</option>
                                        <option value='Asc'>Ataque Ascendente</option>
                                        <option value='Des'>Ataque Descendente</option>
                                    </select>

                                </div>

                                <div>
                                    <select className={Styles.select} onChange={(e) => handleFilterCreated(e)} >
                                        <option value='all'>Filtrar por:</option>
                                        <option value='existe'>Existentes</option>
                                        <option value='creados'>Creados</option>
                                    </select>
                                </div>
                                <div className={Styles.tipos}>
                                    <select className={Styles.select} onChange={(e) => handleFiltertype(e)}>
                                        <option value='all'>Tipo de Pokemon:</option>
                                        <option value='grass'>Grass</option>
                                        <option value='poison'>Poison</option>
                                        <option value='fire'>Fire</option>
                                        <option value='flying'>Flying</option>
                                        <option value='water'>Water</option>
                                        <option value='bug'>Bug</option>
                                        <option value='normal'>Normal</option>
                                        <option value='electric'>Electric</option>
                                        <option value='ground'>Ground</option>
                                        <option value='fairy'>Fairy</option>
                                        <option value='rock'>Rock</option>
                                        <option value='ghost'>Ghost</option>
                                        <option value='steel'>Steel</option>
                                        <option value='psychic'>Psychic</option>
                                        <option value='ice'>Ice</option>
                                        <option value='dragon'>Dragon</option>+-
                                        <option value='stedarkel'>Stedarkel</option>
                                        <option value='shadow'>Shadow</option>
                                        <option value='unknown'>Unknown</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                                <div className={Styles.paginado}>
                                    <Paginado
                                        pokemonsPerPage={pokemonsPerPage}
                                        allPokemons={allPokemons}
                                        paginado={paginado} />
                                </div>
            </div>

            <div className={Styles.Cards}>
                {
                    allPokemons.length === 0 ?
                        <div className={Styles.Cargando}>
                            <img src='https://pa1.narvii.com/6982/fd63ecdd3d57be8d4832917f7e1aaa812d904833r1-800-800_hq.gif'
                                alt='Cargando' />
                        </div>
                        : currentPokemons.map((poke, i) => {
                            return (
                                <fragment>
                                    <Link to={`/${poke.id}`}>
                                        <div className={Styles.Card}>
                                            <Card key={i} name={poke.name} img={poke.img ? poke.img : <img src={imgId} alt='Pokemon' />} types={poke.types} />
                                        </div>
                                    </Link>
                                </fragment>
                            )
                        })
                }
            </div>

        </div>
    )
}



