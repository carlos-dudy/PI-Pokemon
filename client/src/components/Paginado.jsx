import React from 'react';
import Styles from './Paginado.module.css'

export default function Paginado({ pokemonsPerPage, allPokemons, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allPokemons?.length/pokemonsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className={Styles.paginacion}>
            <ul>
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <li key={number}>
                            <button 
                            className={Styles.btn}
                             onClick={() => paginado(number)}
                             >{number}
                             </button>
                        </li>
                    ))

                }
            </ul>
        </nav>
    )
}