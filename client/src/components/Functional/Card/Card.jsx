import React from 'react';
import { Link } from "react-router-dom";
import s from './StylesC.module.css';

export default function Card({ name, img, diet, id }) {
    return (
        <div className={s.container}>
            <div className={s.cardShadow}></div>
            <div className={s.card}>
                <div className={s.card_body} >

                    <div className={s.title}>
                        <h2>{name}</h2>
                    </div>

                </div>
                <div>
                    <img src={img} className={s.card_media} alt="not found" />
                </div>
                <div className={s.card_body} >
                    <div>
                        <Link to={'/recipe/' + id} className={s.description} >
                            See recipe details</Link>
                    </div>

                    <div className={s.diet}>

                        {
                            diet?.map
                                (
                                    (d, index) =>
                                        <ul key={index}>
                                            <li>{d.name}</li>
                                        </ul>
                                )
                        }

                    </div>

                </div>

            </div>
            <div className={s.cardShadow}></div>
        </div >
    );
}
