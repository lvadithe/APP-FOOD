import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postRecipe, getDiets } from "../../../redux/actions";


function validate(post) {
    let errors = {};
    if (!post.name) {
        errors.name = 'Ingresar nombre de la receta'
    }
    if (!post.summary) {
        errors.summary = 'Escribe un breve resumen'
    }
    if (!post.score || post.score < 0 || post.score > 100) {
        errors.score = 'Ingresa un valor de 0 a 100'
    }
    if (!post.healthScore || post.healthScore < 0 || post.healthScore > 100) {
        errors.healthScore = 'Ingresa un valor de 0 a 100'
    }
    if (!post.steps.length) {
        errors.steps = 'Escribe una serie de pasos sobre cómo cocinar la receta'
    }
    if (!post.image) {
        errors.image = 'Ingresar URL de alguna imagen representativa'
    }
    if (!post.diets.length) {
        errors.diets = 'Elige al menos un tipo de dieta'
    }
    return errors;
}

export default function RecipeCreate() {
    const dispatch = useDispatch();
    const diets = useSelector(state => state.diets);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])


    const [post, setPost] = useState({
        name: '',
        summary: '',
        score: '',
        healthScore: '',
        image: '',
        steps: [],
        diets: []
    })
    function handleInputChange(e) {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...post,
            [e.target.name]: e.target.value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (Object.values(errors).length > 0) alert("Por favor rellenar todos los campos")
        else {
            dispatch(postRecipe(post))
            alert('¡Receta creada con éxito!')
        }
    };

    function handleSelectDiets(e) {
        if (!post.diets.includes(e.target.value))
            setPost({
                ...post,
                diets: [...post.diets, e.target.value]
            });
        setErrors(validate({
            ...post,
            diets: [...post.diets, e.target.value]
        }));
    };

    function handleSteps(e) {
        setPost({
            ...post,
            steps: [e.target.value]
        });
        setErrors(validate({
            ...post,
            steps: e.target.value
        }));
    }

    function handleDietDelete(diet) {
        setPost({
            ...post,
            diets: post.diets.filter(elemet => elemet !== diet)
        })
        setErrors(validate({
            ...post,
            diets: [...post.diets]
        }));

    };

    return (
        <div >
            <div />
            <div >
                <div >
                    <h1>Please fill in all the fields</h1>
                    <form onSubmit={e => handleSubmit(e)}>
                        <div>
                            <label>Nombre</label>
                            <input type="text" value={post.name} name='name' onChange={e => handleInputChange(e)} />
                            {errors.name && (
                                <p>{errors.name}</p>
                            )}
                        </div>
                        <div>
                            <label>Resumen</label>
                            <textarea value={post.summary} name='summary' onChange={e => handleInputChange(e)} />
                            {errors.summary && (
                                <p>{errors.summary}</p>
                            )}
                        </div>
                        <div>
                            <label>Puntaje</label>
                            <input type="number" min="0" max='100' value={post.score} name='score' onChange={e => handleInputChange(e)} />
                            {errors.score && (
                                <p>{errors.score}</p>
                            )}
                        </div>
                        <div>
                            <label>Nivel Saludable</label>
                            <input type="number" min="0" max='100' value={post.healthScore} name='healthScore' onChange={e => handleInputChange(e)} />
                            {errors.healthScore && (
                                <p>{errors.healthScore}</p>
                            )}
                        </div>
                        <div>
                            <label>Imagen</label>
                            <input type="text" value={post.image} name='image' onChange={e => handleInputChange(e)} />
                            {errors.image && (
                                <p>{errors.image}</p>
                            )}
                        </div>
                        <div>
                            <label>Paso a Paso</label>
                            <textarea value={post.steps} name='steps' onChange={e => handleSteps(e)} />
                            {errors.steps && (
                                <p>{errors.steps}</p>
                            )}
                        </div>
                        <div>
                            <select onChange={e => handleSelectDiets(e)} defaultValue='default'
                            >
                                <option value="default" disabled >Elegir dietas</option>
                                {
                                    diets && diets.map(d => (
                                        <option value={d.name} key={d.id} >{d.name}</option>
                                    ))
                                }
                            </select>
                            {errors.diets && (
                                <p style={{ float: 'right' }}>{errors.diets}</p>
                            )}
                            {post.diets.map(d =>
                                <div key={d.id} >
                                    <p >{d}</p>
                                    <button onClick={() => handleDietDelete(d)}
                                    >X</button>
                                </div>
                            )}
                        </div>
                        <button type='submit' >¡Crear!</button>
                    </form>
                    <Link to='/home'>
                        <button>Volver</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}