import React, { useEffect } from "react";
import s from './StylesP.module.css';

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
    const pageNumers = []

    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumers.push(i)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className={s.center}>
            <ul className={s.pagination} >
                {pageNumers &&
                    pageNumers.map(number => (  //renderizo los numeros por separado
                        <li key = {number}>
                            <button className={s.button} onClick={() => paginado(number)}>{number}</button>
                        </li>
                    ))}
            </ul>
        </div>

    )

}