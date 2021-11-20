import React from 'react';
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import {getPokemonByName } from '../actions/index'
import Styles from './SearchPokemon.module.css'
import { ImSearch } from "react-icons/im";

export default function SearchPokemon( ){
    
    const dispatch = useDispatch()
    const [name, setName]= useState(" ")

    function handleInputChange(e){
        setName(e.target.value);
        
    }


    function handleSubmit(e){
        e.preventDefault()
        dispatch(getPokemonByName(name));
        setName(" ")
    }


    return (
        <div className={Styles.buscar}>
            <input className={Styles.input}
            type = "text" 
            placeholder = "...Nombre " 
            onChange= {(e) => handleInputChange(e)}
            />
            <button className={Styles.bnt} type='Submit' onClick={(e) => handleSubmit(e)}><ImSearch/></button>
        </div>

    )
}