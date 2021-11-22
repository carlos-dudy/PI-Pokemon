import React from 'react';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, filterByType, getTypes, filterbyCreated, orderByName, orderByAttack, } from '../actions/index.js'
import { Link } from 'react-router-dom';
import Styles from './Home.module.css'
import Card from './Card.jsx'
import SearchPokemon from './SearchPokemon.jsx'
import Paginado from './Paginado.jsx'
import { FcRefresh } from "react-icons/fc";



export default function Home() {

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const types = useSelector((state) => state.types);
    const [orden, setOrden] = useState('') //me trae todo lo que esta en el estado pokemons
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(9)
    const indexOfLastPokemons = currentPage * pokemonsPerPage;
    const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage;
    const currentPokemons = Array.isArray(allPokemons) && allPokemons?.slice(indexOfFirstPokemons, indexOfLastPokemons);


    const paginado = (pageNumbers) => {
        setCurrentPage(pageNumbers)
    }

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

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

                <div className={Styles.div1}>

                    <div><SearchPokemon /></div>

                    <div className={Styles.A1}>
                        <Link to='/create'><button className={Styles.bnt}>CREAR POKEMON</button></Link>
                    </div>

                    <div className={Styles.A1}>
                        <button className={Styles.cargar} onClick={e => { handleClick(e) }}>
                            <FcRefresh />
                        </button>
                    </div>


                </div>


                <div className={Styles.Filtros}>

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
                        <select className={Styles.select} onChange={handleFiltertype} >
                            {
                                types.map((p, i) => (
                                    <option key={i} value={p.name}>{p.name}</option>))
                            }
                        </select >

                    </div>

                </div>

            <div className={Styles.paginado}>
                <Paginado className={Styles.numeros}
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

                                    <div className={Styles.Card}>
                                        <Card key={i} name={poke.name} img={poke.img} types={poke.types} id={poke.id} />
                                    </div>

                                </fragment>
                            )
                        })
                }
            </div>

        </div>
    )
}



