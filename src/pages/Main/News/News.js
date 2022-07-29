import React from 'react';
import {useNavigate} from "react-router-dom";
import NewsRow from "./NewsRow";


const News = () => {

    const navigate = useNavigate();

    return (
        <section className="news">
            <div className="container">
                <h2 className="title">
                    Новости
                </h2>
                <NewsRow/>
                <button className="btn news__btn" type={'button'} onClick={() => navigate('/news')}>
                    Все новости
                </button>
            </div>
        </section>
    );
};

export default News;