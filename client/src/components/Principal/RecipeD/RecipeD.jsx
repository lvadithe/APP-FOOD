import React from "react";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRecipeDetail, getClean } from "../../../redux/actions";



export default function Detail() {
    const dispatch = useDispatch()
    const { id } = useParams()


    useEffect(() => {
        dispatch(getRecipeDetail(id))  //props.match.params.id
        return () => { dispatch(getClean()) }  //BLANQUEO EL ESTADO GLOBAL
    }, [dispatch, id])

    const myRecipe = useSelector(state => state.detail)

/*     console.log(myRecipe[0].steps); */


    return (
        <div >
            <Link to='/home'>
                <button
                >HOME</button>
            </Link>

            <div >
                {myRecipe.length > 0 ?
                    <div>
                        <h1
                        >{myRecipe[0].name && myRecipe[0].name}</h1>
                        <img
                            src={myRecipe[0].image ? myRecipe[0].image : 'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1492&q=80'} alt="no se encontro la imagen" />
                        <div>
                            <h5 >Score:</h5>
                            <h2>{myRecipe[0].score}</h2>
                        </div>
                        <div>
                            <h3 >Diet types:</h3><ul >{myRecipe[0].diets.map(d => <li >{d.name}</li>)}</ul>
                        </div>
                        <div>
                            <h5 >Summary:</h5>
                            <h3 > <div dangerouslySetInnerHTML={{ __html: myRecipe[0].summary }} /></h3>
                        </div>
                        <div>
                            <h5 >Health Score:</h5>
                            <h2>{myRecipe[0].healthScore}</h2>
                        </div>
                        <div>
                            <h5 >Steps:</h5>
                            <p  dangerouslySetInnerHTML={{ __html: myRecipe[0].steps }}></p>
                        </div>
                    </div> : <p>LOADING...</p>
                }

            </div>
        </div>
    )
}