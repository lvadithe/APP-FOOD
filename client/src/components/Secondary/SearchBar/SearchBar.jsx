import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../../../redux/actions";
import s from './StylesS.module.css';
import { Link } from "react-router-dom";

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)   //valor del input
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNameRecipes(name)) //el estado
        setName('')

    }

    return (
        <div className={s.searchContainer} >

            <input
                className={s.searchInput}
                value={name}
                type='text'
                placeholder="Recipe..."
                onChange={(e) => handleInputChange(e)}
            />
            <button className={s.buttonSearch} type='submit' onClick={(e) => handleSubmit(e)} >Search</button>

            <button className={s.buttonSearch}>
                <Link className={s.link} to="/recipe" >CREATE RECIPE</Link>
            </button>

        </div>
    )
}
