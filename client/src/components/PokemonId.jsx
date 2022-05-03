import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getIds } from '../actions/index';
import Styles from './PokemonId.module.css'
import { useHistory } from 'react-router-dom';
import { BsArrowLeftSquareFill } from "react-icons/bs"

export default function PokemonId() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [state, setState] = useState({});
    const info = useSelector(store => store.detalleId);
    const { id } = useParams();

    const getDetails = () => {
        if (Object.keys(state).length === 0) dispatch(getIds(id))
    }


    useEffect(() => {
        getDetails();
        return () => {
            setState({})
        }
    }, [])

    useEffect(() => {
        setState(info);
    }, [info])

    function handleClick(e){
        e.preventDefault();
        history.push('/home')
        setState({})
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.nav}>
                <div>
                    <button onClick={handleClick} className={Styles.btn}><BsArrowLeftSquareFill /></button>
                </div>-

                <div className={Styles.title}>
                    <h1> Mas detalles...</h1>
                </div>
            </div>
            <div className={Styles.detalle}>
                {Object.keys(state).length === 0 ? <span className={Styles.alerta}>Por favor Espere..</span> :

                    <div className={Styles.details}>

                        <div className={Styles.name}>
                            <div className={Styles.nombre}>
                                {state.name.toUpperCase()}
                            </div>
                        </div>

                        <div className={Styles.position}>
                            <div className={Styles.izq}>
                                <img className={Styles.img} src={state.img} alt='img' />
                            </div>



                            <div className={Styles.infoPokemon}>
                                
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
                                            {state.types.map((el, i) =>
                                                <h3 key={i}>
                                                    {`✔ ${el.name.toUpperCase()}`}
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


