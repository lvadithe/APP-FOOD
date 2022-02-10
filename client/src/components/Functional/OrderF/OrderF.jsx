import React, { useState, useEffect } from "react";
import { orderByScore } from "../../../redux/actions"
import { useDispatch/* , useSelector */ } from 'react-redux'

export default function OrderF() {
  const dispatch = useDispatch()
  const [tomas, setTomas] = useState(true)

  useEffect(() => {            //traigo las recetas cuando el componente se monta.
    dispatch(orderByScore())
  }, [dispatch])

  
  function handleOrderByScore(e) {
    e.preventDefault()
    dispatch(orderByScore(e.target.value))
    tomas ? setTomas(false) : setTomas(true)
  };

  return (
    <div>
      <select onChange={e => handleOrderByScore(e)} defaultValue='default' >
        <option value="default" disabled >Order by score</option>
        <option value="desc">Higher</option>
        <option value="asc">Lower</option>
      </select>
    </div>
  );
}
