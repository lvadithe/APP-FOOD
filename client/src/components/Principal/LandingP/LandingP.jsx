import React from 'react';
import { Link } from 'react-router-dom';
import s from './StylesL.module.css';

export default function LandingP() {

    return (

        <div className={s.component} >

            <div className={s.b_conteiner}>
                <>
                    <h1>Enter, you will be able to create recipes and research a dish for every occasion.</h1>
                    <h2>There is no love more sincere than the love of food.</h2>
                    <h3>don't think twice!</h3>

                    <Link to={'/home'} >
                        <button className={s.button}>
                            GET STARTED
                        </button>
                    </Link>

                </>
            </div>

            <div className={s.gradient} />
        </div>

    );

}
