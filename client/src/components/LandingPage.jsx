import React from 'react';
import {useHistory } from 'react-router-dom';
import a from './LandingPage.module.css';
import titulo from './imagenes/pokemontitulo.png'
import poke from './imagenes/pokebola2.png'


export default function LandingPage() {
    const history = useHistory()

    function handleMsj(e) {
        e.preventDefault();
        alert('Fallaste! Intentalo nuevamente!')
    }
    function handleIntro(e){
        e.preventDefault();
        alert('Acertaste!!!')
        history.push('/home')
    }

    return (
        <div className={a.container}>
            <div className={a.containerInfo}>
                <div className={a.Pokebolas}>
                    <button className={a.bnt} onClick={handleMsj}>
                        <img className={a.img} src={poke}
                            alt='Pokebola' />
                    </button>
                    <button className={a.bnt} onClick={handleMsj}>
                        <img className={a.img} src={poke}
                            alt='Pokebola' />
                    </button>
                    <button className={a.bnt} onClick={handleMsj}>
                        <img className={a.img} src={poke}
                            alt='Pokebola' />
                    </button>
                    <button className={a.bnt} onClick={handleMsj}>
                        <img className={a.img} src={poke}
                            alt='Pokebola' />
                    </button>
                    <button className={a.bnt} onClick={handleMsj}>
                        <img className={a.img} src={poke}
                            alt='Pokebola' />
                    </button>
                    <button className={a.bnt} onClick={handleMsj}>
                        <img className={a.img} src={poke}
                            alt='Pokebola' />
                    </button>
                </div>
                <div>
                    <div className={a.titulo}>
                        <img
                            className={a.logo}
                            src={titulo}
                            alt='to home' />
                    </div>
                    <div className={a.texto}>
                        <h1>Descubre cual Pokebola te abre la App!</h1>
                    </div>
                </div>
                <div className={a.Pokebolas2}>
                    <button className={a.bnt} onClick={handleMsj}>
                        <img className={a.img} src={poke}
                            alt='Pokebola' />
                    </button>
                    <button className={a.bnt} onClick={handleMsj}>
                        <img className={a.img} src={poke}
                            alt='Pokebola' />
                    </button>
                    <button className={a.bnt} onClick={handleIntro}>
                        <img className={a.img} src={poke}
                            alt='Pokebola' />
                    </button>
                    <button className={a.bnt} onClick={handleMsj}>
                        <img className={a.img} src={poke}
                            alt='Pokebola' />
                    </button>
                    <button className={a.bnt} onClick={handleMsj}>
                        <img className={a.img} src={poke}
                            alt='Pokebola' />
                    </button>
                    <button className={a.bnt} onClick={handleMsj}>
                        <img className={a.img} src={poke}
                            alt='Pokebola' />
                    </button>
                </div>
            </div>
        </div>
    )
}