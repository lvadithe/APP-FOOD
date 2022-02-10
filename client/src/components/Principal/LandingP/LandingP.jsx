import React from 'react';
import { Link } from 'react-router-dom';
import s from './StylesL.module.css';
import logo from '../../../assets/image/logo.png';



export default function LandingP() {
    return (
        <div className={s.component} >
            <div className={s.landing_b} >
                <img
                    className={s.logo}
                    src={logo}
                    alt='Not Found'
                />
            </div>
            <div className={s.b_conteiner}>

                <Link to={'/home'} >
                    <button className={s.button}>
                        GET STARTED
                    </button>
                </Link>

            </div>

            <div className={s.gradient} />
        </div>
    );
}
