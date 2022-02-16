import React, { useEffect } from "react";
import { getDiets, getRecipes } from "../../../redux/actions"
import { useDispatch, useSelector } from 'react-redux'
import s from './StylesO.module.css';

export default function OrderF(props) {

  const diets = useSelector(state => state.diets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch])

  function handleClick(e) {    //le paso el evento..
    e.preventDefault()
    dispatch(getRecipes())   //resetea las recipes
  }


  return (

    <div className={s.container} >

      <select onChange={e => props.handleOrderByName(e)} defaultValue='default' className={s.filters} >
        <option value="default" disabled >Alphabetical order</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <select onChange={e => props.handleOrderByScore(e)} defaultValue='default' className={s.filters}>
        <option value="default" disabled >Order by score</option>
        <option value="desc">Higher</option>
        <option value="asc">Lower</option>
      </select>

      <select onChange={(e) => props.handleFilterByDiets(e)} className={s.filters}>
        <option value="All"> All diets</option>
        {
          diets && diets.map(d => (
            <option value={d.name} key={d.id}>{d.name}</option>
          ))
        }
      </select>

      <button className={s.button} onClick={e => { handleClick(e) }}>
        BACK TO ALL RECIPES
      </button>
    </div>

  );

}
