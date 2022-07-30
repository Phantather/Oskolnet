import React from 'react';
import {NavLink} from "react-router-dom";
import TestContent from "./TestContent";

const Test = () => {
    return (
        <main>
            <section className="test">
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
                    <TestContent/>
                </div>
            </section>
        </main>
    );
};

export default Test;