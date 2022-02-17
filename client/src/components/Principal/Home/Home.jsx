import React from "react";
import PaginateF from "../../Secondary/Paginate/Paginate";
import { useEffect, useState } from "react";
import { filterRecipesByDiet, getRecipes, filterByName, filterByScore } from "../../../redux/actions"
import { useDispatch } from 'react-redux'
import SearchBar from "../../Secondary/SearchBar/SearchBar";
import s from './StylesH.module.css';
import OrderF from "../../Functional/OrderF/OrderF";

export default function Home() {

    const dispatch = useDispatch();
    const [tomas, setTomas] = useState(true)

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])

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
        <div className={s.comp} >
            <div className={s.cardShadow}></div>
            <div className={s.container}>

                <SearchBar />
                <OrderF

                    handleOrderByName={handleOrderByName}
                    handleOrderByScore={handleOrderByScore}
                    handleFilterByDiets={handleFilterByDiets}
                />

            </div>

            <PaginateF />
            <div className={s.cardShadow}></div>
        </div>
    )
}