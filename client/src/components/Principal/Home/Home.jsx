import React from "react";
import PaginateF from "../../Secondary/Paginate/Paginate";
import { useEffect, useState } from "react";
import { filterRecipesByDiet, getRecipes/* , getDiets */, filterByName, filterByScore } from "../../../redux/actions"
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from "../../Secondary/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import s from './StylesH.module.css';
import OrderF from "../../Functional/OrderF/OrderF";

export default function Home() {

    const dispatch = useDispatch();
    const [tomas, setTomas] = useState(true)

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])



    function handleClick(e) {    //le paso el evento..
        e.preventDefault()
        dispatch(getRecipes())   //resetea las recipes
    }

    function handleOrderByName(e) {
        dispatch(filterByName(e.target.value))
        tomas ? setTomas(false) : setTomas(true)
    };

    function handleOrderByScore(e) {
        e.preventDefault()
        dispatch(filterByScore(e.target.value))
        tomas ? setTomas(false) : setTomas(true)
    };

    function handleFilterByDiets(e) {
        dispatch(filterRecipesByDiet(e.target.value))
    };

    return (
        <div className={s.container}>

            <Link to="/recipe">CREATE RECIPE</Link>
            
            <div>
                <SearchBar />

                <OrderF
                    handleOrderByName={handleOrderByName}
                    handleOrderByScore={handleOrderByScore}
                    handleFilterByDiets={handleFilterByDiets}
                />

                <button
                    onClick={e => { handleClick(e) }}>
                    BACK TO ALL RECIPES
                </button>

            </div>

            <PaginateF />
        </div>
    )
}