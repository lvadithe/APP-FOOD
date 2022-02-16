import React from 'react';
import Card from "../../Functional/Card/Card";
import Paginate from "../../Functional/PaginateF/PaginateF";
import { useState, useEffect } from "react";
import { getRecipes } from "../../../redux/actions"
import { useDispatch, useSelector } from "react-redux";


export default function PaginateF() {
    const allRecipes = useSelector((state) => state.recipes)
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1) // lo seteo en 1 porque siempre arranco en la primer pagina
    const [recipesPerPage] = useState(9)  //cuantas recetas quiero por pagina, por estado local
    const iOfLastRecipe = currentPage * recipesPerPage      //pagina actual por cantidad de recetas por pag(indice del ultimo rec que tengo por pag)
    const iOfFirstRecipe = iOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(iOfFirstRecipe, iOfLastRecipe)

    const paginado = (pageNumber) => {    //para el renderizado del componente
        setCurrentPage(pageNumber)
    }

    useEffect(() => {            //traigo las recetas cuando el componente se monta.
        dispatch(getRecipes())
    }, [dispatch])

    return (
        <div>
            <div>
               <Paginate
                key={1}
                recipesPerPage={recipesPerPage}
                allRecipes={allRecipes.length}   //porque necesito un valor numerico
                paginado={paginado}
            /> 
            </div>
            
            <div >
                {currentRecipes?.map((el) => {
                    return (
                        <Card img={el.image} name={el.name} diet={el.diets} id={el.id} key={el.id} />
                    )
                })
                }
            </div>

            <Paginate
                key={1}
                recipesPerPage={recipesPerPage}
                allRecipes={allRecipes.length}   //porque necesito un valor numerico
                paginado={paginado}
            />

        </div>

    )
}
