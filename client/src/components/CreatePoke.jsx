import React from 'react';
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTypes, postPokemon } from '../actions/index'
import { Link, useHistory } from 'react-router-dom';
import Styles from './CreatePoke.module.css';
import { BsArrowLeftSquareFill } from "react-icons/bs"


function validacion(input) {
    let errores = {};
    if (!input.name) {
        errores.name = "Se requiere un Nombre"
    } else if (input.hp <= 0 || !input.hp >= 100) {
        errores.hp = 'Los valores Permitidos son 0-100'
    } else if (input.attack <= 0 || !input.attack >= 100) {
        errores.attack = 'Los valores Permitidos son 0-100'
    } else if (input.defense <= 0 || !input.defense >= 100) {
        errores.defense = 'Los valores Permitidos son 0-100'
    } else if (input.speed <= 0 || !input.speed >= 100) {
        errores.speed = 'Los valores Permitidos son 0-100'
    } else if (input.height <= 0 || !input.height >= 100) {
        errores.height = 'Los valores Permitidos son 0-100'
    } else if (input.weight <= 0 || !input.weight >= 1000) {
        errores.weight = 'Los valores Permitidos son 0-1000'
    }
    return errores
}

function validacionTipos(input) {
    let errores = {}
    if (input.types.length > 1) {
        errores.types = 'Solo se permiten dos tipos para un Pokemon'
    }
    return errores
}


export default function CreatePoke() {
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector(state => state.types)
    const [errores, setErrores] = useState({})

    const [input, setInput] = useState({
        name: " ",
        img: " ",
        hp: 0,
        attack: 0,
        defense: 0,
        height: 0,
        weight: 0,
        speed: 0,
        types: []
    });


    function handleChange(e) {
        setInput(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
        setErrores(validacion({
            ...input,
            [e.target.name]: e.target.value
        }));
        console.log(input)

    }

    function handleSelect(e) {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
        setErrores(validacionTipos({
            ...input,
            types: [input.types, e.target.values]
        }))
        console.log(input.types.length)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input)
        dispatch(postPokemon(input))
        alert('Pokemon Creado!')
        setInput({
            name: '',
            img: '',
            hp: 0,
            attack: 0,
            defense: 0,
            height: 0,
            weight: 0,
            speed: 0,
            types: []
        })
        history.push('/home')
    }

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);


    return (
        <div className={Styles.contenedor}>
            <div className={Styles.nav}>
            <div>
                <Link to='./home' ><button className={Styles.btn}><BsArrowLeftSquareFill /></button></Link>
            </div>

            <div className={Styles.title}>
                <h1> Creá tu Pokemon</h1>
            </div>
            </div>

            <div className={Styles.position}>
            
                <form onSubmit={handleSubmit} className={Styles.form}>
                    <div className={Styles.izq}>
                    <div>
                        <label className={Styles.lbl}><span className={Styles.spa} >Nombre:</span ></label>
                        <div>
                            <input className={Styles.input} onChange={handleChange} type='text' name="name" autoComplete="off" required />
                            {errores.name && (
                                <p className={Styles.errores}>{errores.name}</p>
                            )}
                        </div>
                    </div>

                    

                    <div>
                        <label> Vida: </label>
                        <div>
                            <input onChange={handleChange} className={Styles.rango} type='range' min="0" max="4" name='hp' />
                            {errores.hp && (
                                <p className={Styles.errores}>{errores.hp}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label >Ataque: </label>
                        <div>
                            <input className={Styles.rango} onChange={handleChange} type='range' min="0" max="4" name='attack' />
                            {errores.attack && (
                                <p className={Styles.errores}>{errores.attack}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label >Defensa: </label>
                        <div>
                            <input className={Styles.rango} onChange={handleChange} type='range' min="0" max="4" name='defense' />
                            {errores.defense && (
                                <p className={Styles.errores}>{errores.defense}</p>
                            )}
                        </div>
                    </div>
                    </div>
                    <div className={Styles.der}>
                    <div>
                        <label >Velocidad: </label>
                        <div>
                            <input className={Styles.rango} onChange={handleChange} type='range' min="0" max="4" name='speed' />
                            {errores.speed && (
                                <p className={Styles.errores}>{errores.speed}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label >Altura: </label>
                        <div>
                            <input className={Styles.rango} onChange={handleChange} type='range' min="0" max="4" name='height' />
                            {errores.height && (
                                <p className={Styles.errores}>{errores.height}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label >Peso: </label>
                        <div>
                            <input className={Styles.rango} onChange={handleChange} type='range' name='weight' />
                            {errores.weight && (
                                <p className={Styles.errores}>{errores.weight}</p>
                            )}
                        </div>
                    </div>

                    <label > Tipo de Pokemon: </label>
                    <select className={Styles.select} onChange={handleSelect} >
                        {
                            types.map((p, i) => (
                                <option key={i} value={p.name}>{p.name}</option>))
                        }
                    </select >
                    {errores.types && (
                        <p className={Styles.errores}>{errores.types}</p>
                    )}
                    <ul>
                        <li>{input.types.map(tipo => " ⭐" + tipo + '.' )}</li>
                    </ul>
                    </div>
                    <div>
                        <label >Imagen:</label>
                        <div>
                            <input onChange={handleChange} type='file' name='img' />
                        </div>
                    </div>
                    <div>
                        <button className={Styles.submit} type='submit'>Crear Pokemon</button>
                    </div>
                </form>
            
            </div>
        </div>

    )
}

