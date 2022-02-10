import React from "react";
import PaginateF from "../../Secondary/Paginate/Paginate";
import { useEffect, useState } from "react";
import { filterRecipesByDiet, getRecipes, filterByName, filterByScore } from "../../../redux/actions"
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from "../../Secondary/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import s from './StylesH.module.css';
/* import OrderF from "../../Functional/OrderF/OrderF"; */

export default function Home() {

    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets);
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
            <Link 
                to="/recipe">CREATE RECIPE</Link>
            <div>
                <SearchBar />
                <select onChange={e => handleOrderByName(e)} defaultValue='default' >
                    <option value="default" disabled >Alphabetical order</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>

                {/*  <OrderF /> */}
                <select onChange={e => handleOrderByScore(e)} defaultValue='default' >
                    <option value="default" disabled >Order by score</option>
                    <option value="desc">Higher</option>
                    <option value="asc">Lower</option>
                </select>

                <select
                    onChange={(e) => handleFilterByDiets(e)}>
                    <option value="All"> All diets</option>
                    <option value="gluten free"> Gluten free</option>
                    <option value="dairy free"> Dairy free</option>
                    <option value="paleolithic"> Paleolithic</option>
                    <option value="ketogenic"> Ketogenic</option>
                    <option value="lacto ovo vegetarian"> Lacto ovo vegetarian</option>
                    <option value="vegan"> Vegan</option>
                    <option value="pescatarian"> Pescatarian</option>
                    <option value="primal"> Primal</option>
                    <option value="fodmap friendly"> Fodmap friendly</option>
                    <option value="whole 30"> Whole 30</option>
                </select>

                <button
                    onClick={e => { handleClick(e) }}>
                    BACK TO ALL RECIPES
                </button>
            </div>

            <PaginateF />
        </div>
    )
}