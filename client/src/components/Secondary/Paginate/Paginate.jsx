import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getRecipes } from "../../../redux/actions"
import Card from "../../Functional/Card/Card";
import PaginateF from "../../Functional/PaginateF/PaginateF";

export default function Paginate() {

    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes)

    useEffect(() => {           
        dispatch(getRecipes())
    }, [dispatch])

    const [currentPage, setCurrentPage] = useState(1) // lo seteo en 1 porque siempre arranco en la primer pagina
    const [recipesPerPage] = useState(9)  //cuantas recetas quiero por pagina, por estado local
    const iOfLastRecipe = currentPage * recipesPerPage      //pagina actual por cantidad de recetas por pag(indice del ultimo rec que tengo por pag)
    const iOfFirstRecipe = iOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(iOfFirstRecipe, iOfLastRecipe)

    const paginado = (pageNumber) => {    //para el renderizado del componente
        setCurrentPage(pageNumber)
    }

    return (
        <div>
            <div>
                <PaginateF
                    recipesPerPage={recipesPerPage}
                    allRecipes={allRecipes.length}   //porque necesito un valor numerico
                    paginado={paginado}
                    currentPage={currentPage}
                />
            </div>

            <div >
                {
                    currentRecipes?.map((el) => {
                        return (
                            <Card img={el.image} name={el.name} diet={el.diets} id={el.id} key={el.id} />
                        )
                    })
                }
            </div>

            <PaginateF
                recipesPerPage={recipesPerPage}
                allRecipes={allRecipes.length}   //porque necesito un valor numerico
                paginado={paginado}
                currentPage={currentPage}
            />

        </div>

    )
}
