import React, { useState, useEffect } from "react";
import { getDiets } from "../../../redux/actions"
import { useDispatch, useSelector } from 'react-redux'

export default function OrderF(props) {
  const diets = useSelector(state => state.diets);
  const dispatch = useDispatch();

  useEffect(() => {            //traigo las recetas cuando el componente se monta.
    dispatch(getDiets())
  }, [dispatch])


  return (
    <div>
      <select onChange={e => props.handleOrderByName(e)} defaultValue='default' >
        <option value="default" disabled >Alphabetical order</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <select onChange={e => props.handleOrderByScore(e)} defaultValue='default' >
        <option value="default" disabled >Order by score</option>
        <option value="desc">Higher</option>
        <option value="asc">Lower</option>
      </select>

      <select onChange={(e) => props.handleFilterByDiets(e)}>
        <option value="All"> All diets</option>
        {
          diets && diets.map(d => (
            <option value={d.name} key={d.id}>{d.name}</option>
          ))
        }
      </select>
    </div>
  );
}
