import axios from 'axios';

export function getRecipes() {

  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/recipes");
    return dispatch({
      type: 'GET_RECIPES',
      payload: json.data

    })
    
  }

};

/* export function getRecipes() {

  return  function (dispatch) {
    fetch("http://localhost:3001/recipes")
    .then(res => res.json()) 
    .then(data => {
      return dispatch({ type: 'GET_RECIPES', payload: data })
    })  
    
  }

}; */

/* export function getRecipes() {

  return  function (dispatch) {
    axios.get("http://localhost:3001/recipes")
    .then(res => dispatch({ type: 'GET_RECIPES', payload: res.data })) 
    .catch(err => console.error(err)) 
    
  }

}; */

export function getDiets() {

  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/types");
    return dispatch({
      type: 'GET_DIETS',
      payload: json.data,
    })
  }

};

export function filterRecipesByDiet(payload) {

  return {
    type: 'FILTER_BY_DIET',
    payload,
  }

};

export function postRecipe(payload) {

  return async function () {
    const data = await axios.post("http://localhost:3001/recipe", payload);  //post del payload
    return data
  }

};

export function filterByName(payload) {

  return {
    type: 'FILTER_BY_NAME',
    payload,
  }

};

export function filterByScore(payload) {

  return {
    type: "FILTER_BY_SCORE",
    payload,
  }

};


export function getNameRecipes(name) { //por busqueda -> query

  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/recipes?name=${name}`);
    return dispatch({ type: 'GET_NAME_RECIPES', payload: json.data })
  }

};

export function getRecipeDetail(id) {

  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/recipes/${id}`);
    return dispatch({ type: 'GET_DETAIL', payload: json.data })
  }

    ;
}

export function getClean() {

  return {
    type: 'GET_CLEAN',
  }

};