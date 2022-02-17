import React from "react";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRecipeDetail, getClean } from "../../../redux/actions";
import s from './StylesD.module.css';

export default function Detail() {

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getRecipeDetail(id))  //props.match.params.id
        return () => { dispatch(getClean()) }  //BLANQUEO EL ESTADO GLOBAL
    }, [dispatch, id])

    const myRecipe = useSelector(state => state.detail)

    return (
        <div >

            <Link to='/home'>
                <button className={s.button}>HOME</button>
            </Link>

            <div >
                {myRecipe.length > 0 ?
                    <div className={s.component} >
                        
                        <h1 className={s.title}>{myRecipe[0].name}</h1>

                        <div className={s.imgContainer}>
                            <img src={myRecipe[0].image}  width="500px" height="400px" alt="no se encontro la imagen" />
                        </div>
                        <div className={s.detailContainer} >

                            <div>
                                <h3 className={s.h3}>Score:</h3>
                                <h2>{myRecipe[0].score}</h2>
                            </div>
                            <div>
                                <h3 className={s.h3}>Diet types:</h3><ul >{myRecipe[0].diets.map(d => <li className={s.li}>{d.name}</li>)}</ul>
                            </div>
                            <div>
                                <h3 className={s.h3}>Summary:</h3>
                                <p className={s.p} dangerouslySetInnerHTML={{ __html: myRecipe[0].summary }} />
                            </div>
                            <div>
                                <h3 className={s.h3}>Health Score:</h3>
                                <h2>{myRecipe[0].healthScore}</h2>
                            </div>
                            <div>
                                <h3 className={s.h3}>Steps:</h3>
                                <ul><li className={s.li}>{myRecipe[0].steps}</li></ul>
                            </div>

                        </div>

                    </div> : <p className={s.loading}>LOADING...</p>
                }
 
            </div>
            
        </div>
    )
}