import React from 'react';
import img from '../../assets/notFound/notFound.png'
import {useNavigate} from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="notFound">
            <img src={img} alt=""/>
            <h2 className="title">
                404. Страница не найдена
            </h2>
            <p className="notFound__text">
                То, что вы ищете, не существует или пока не открыто.
            </p>
            <button className="btn notFound__btn" type="button" onClick={() => navigate('/')}>
                Перейти на главную
            </button>
        </div>
    );
};

export default NotFound;