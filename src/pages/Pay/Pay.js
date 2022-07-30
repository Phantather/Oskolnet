import React from 'react';
import {NavLink} from "react-router-dom";
import PayLIst from "./PayLIst";

const Pay = () => {
    return (
        <main>
            <section className="pay">
                <div className="container">
                    <div className="rate__links">
                        <NavLink to={'/'} className="rate__links-nav">
                            Главная
                        </NavLink>
                        /
                        <NavLink to={'/pay'} className="rate__links-nav">
                            Оплатить
                        </NavLink>
                    </div>
                    <h2 className="title">
                        Оплатить
                    </h2>
                    <PayLIst/>
                </div>
            </section>
        </main>
    );
};

export default Pay;