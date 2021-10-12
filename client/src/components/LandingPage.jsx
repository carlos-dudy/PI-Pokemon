import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './LandingPage.module.css';
import titulo from './imagenes/pokemontitulo.png'

export default function LandingPage(){
    return(
        <div className={Styles.Inicio}>
            <Link to= '/home'>
                <button className={Styles.bnt}>INGRESAR</button>
                </Link>
                <img
                    className={Styles.logo}
                    src={titulo}
                    alt = 'to home'/>
            </div>
    )
}