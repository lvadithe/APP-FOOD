import React from "react";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { filterRecipesByDiet, filterByName, filterByScore } from "../../../redux/actions";
import Paginate from "../../Secondary/Paginate/Paginate";
import SearchBar from "../../Secondary/SearchBar/SearchBar";
import OrderF from "../../Functional/OrderF/OrderF";
import s from './StylesH.module.css';

export default function Home() {

    const dispatch = useDispatch();
    const [state, setState] = useState(true)

    function handleOrderByName(e) {
        dispatch(filterByName(e.target.value))
        state ? setState(false) : setState(true)
    };

    function handleOrderByScore(e) {
        e.preventDefault()
        dispatch(filterByScore(e.target.value))
        state ? setState(false) : setState(true)
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

            <Paginate />
            <div className={s.cardShadow}></div>
        </div>
    )
}