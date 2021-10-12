import React from 'react';
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTypes, postPokemon } from '../actions/index'
import { Link, useHistory } from 'react-router-dom';
import Styles from './CreatePoke.module.css';
import { RiHome3Fill } from "react-icons/ri";


export default function CreatePoke() {
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector(state => state.types)
    
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

    function handleChange(e){
        setInput(values=>({
            ...values,
            [e.target.name]: e.target.value
        }))
        console.log(e.target.name)
    }

    function handleSelect(e) {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
        console.log(e.target.value)
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
    }, []);

    return (
        <div className={Styles.contenedor}>
            <div>
            <Link to='./home' className={Styles.bnt}><button>Volver</button></Link>
            </div>
            <div className={Styles.titulo}>
            <h1> Creá tu Pokemon</h1>
            </div>
            <form onSubmit={handleSubmit} className={Styles.formulario}>
                <div>
                    <label>Nombre:</label>
                    <div>
                        <input onChange={handleChange} type='text' name="name" autoComplete="off" required />
                    </div>
                </div>
                <div>
                    <label>imagen:</label>
                    <div>
                        <input onChange={handleChange} type='text'  name='img' />
                    </div>
                </div>

                <div>
                    <label> Vida: </label>
                    <div>
                        <input onChange={handleChange} type='number' name='hp'  />
                    </div>
                </div>

                <div>
                    <label>Ataque: </label>
                    <div>
                        <input onChange={handleChange} type='number'  name='attack' />
                    </div>
                </div>
                <div>
                    <label>Defensa: </label>
                    <div>
                        < input onChange={handleChange} type='number'  name='defense' />
                    </div>
                </div>
                <div>
                    <label>Velocidad: </label>
                    <div>
                        <input onChange={handleChange} type='number'  name='speed' />
                    </div>
                </div>

                <div>
                    <label>Altura: </label>
                    <div>   
                    <input onChange={handleChange} type='number'  name='height' />
                    </div>
                </div>
                <div>
                    <label>Peso: </label>
                    <div>
                        <input onChange={handleChange} type='number' placeholder='Peso'  name='weight' min='0' />
                    </div>
                </div>

                <label >Tipo de Pokemon: </label>
                <select onChange={handleSelect} >
                    {
                    types.map((p , i) => (
                        <option key={i} value={p.name}>{p.name}</option>))
                    }
                </select >
                <ul>
                    <li>{input.types.map(tipo => tipo + ' ,')} </li>
                </ul>
                <div>
                    <button type='submit'>Crear Pokemon</button>
                </div>
            </form>
        </div>

)
}

