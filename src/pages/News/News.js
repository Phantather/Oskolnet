import React from 'react';
import {NavLink} from "react-router-dom";
import NewsRow from "./NewsRow";

const News = () => {
    return (
        <main>
            <section className="news">
                <div className="container">
                    <div className="rate__links">
                        <NavLink to={'/'} className="rate__links-nav">
                            Главная
                        </NavLink>
                        /
                        <NavLink to={'/news'} className="rate__links-nav">
                            Новости
                        </NavLink>
                    </div>
                    <h2 className="title">
                        Новости
                    </h2>
                    <NewsRow/>
                </div>
            </section>
        </main>
    );
};

export default News;