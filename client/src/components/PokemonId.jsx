import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getIds } from '../actions/index';
import Styles from './PokemonId.module.css'
import { Link } from 'react-router-dom';

export default function PokemonId() {

    const dispatch = useDispatch();
    const [state, setState] = useState({});
    const info = useSelector(store => store.detalleId);
    const { id } = useParams();

    const getDetails = () => {
        if (Object.keys(state).length === 0) dispatch(getIds(id))
    }


    useEffect(() => {
        getDetails();
        setState()
    }, [])

    useEffect(() => {
        setState(info);
    }, [info])


    return (
        <div className={Styles.container}>

            <Link to="/home">
                <button className={Styles.home}>
                    Volver
                </button>
            </Link>
            <div className={Styles.detalle}>
                {Object.keys(state).length === 0 ? <span className= {Styles.alerta}>Por favor Espere..</span> :

                    <div className={Styles.details}>

                        <div>
                            <div className={Styles.nombre}>
                                {state.name.toUpperCase()}
                            </div>
                        </div>


                        <div>
                            <img className={Styles.img} src={state.img} alt='img' />
                        </div>



                        <div className={Styles.infoPokemon}>
                            <div >
                                <div>
                                    <label>Puntos de Vida: </label>
                                    {state.hp}
                                </div>
                                <div >
                                    <label>Ataque: </label>
                                    {state.attack}
                                </div>
                                <div>
                                    <label>Defensa: </label>
                                    {state.defense}
                                </div>
                                <div>
                                    <label>Altura: </label>
                                    {state.height}
                                </div>
                                <div>
                                    <label>Peso: </label>
                                    {state.weight}
                                </div>
                                <div>
                                    <label>Velocidad: </label>
                                    {state.speed}
                                </div>
                                <div >
                                    <label>Id: </label>
                                    {state.id}
                                </div>
                                <div>
                                    <div>
                                        <label>Tipo:</label>
                                    {state.types.map((type, i) =>
                                        <h3 key={i}>
                                            {`✔ ${type.toUpperCase()}`}
                                        </h3>)
                                    }
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>}
        </div>

        </div >
    )
}


