import React, { useEffect } from "react";

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
    const pageNumers = []

    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumers.push(i)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pageNumers])

    return (
        <nav>
            <ul >
                {pageNumers &&
                    pageNumers.map(number => (  //renderizo los numeros por separado
                        <li key = {number}>
                            <button  onClick={() => paginado(number)}>{number}</button>
                        </li>
                    ))}
            </ul>
        </nav>

    )

}