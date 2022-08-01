import React from 'react';
import RateInfo from "../../components/Rate/RateInfo/RateInfo";
import RateCall from "../../components/Rate/RateCall";
import RateAddress from "../../components/Rate/RateAddress";
import {NavLink} from "react-router-dom";


const ForHome = () => {
    return (
        <main>
            <section className="rate">
                <div className="container">
                    <div className="rate__links">
                        <NavLink to={'/'} className="rate__links-nav">
                            Главная
                        </NavLink>
                        /
                        <NavLink to={'/forHome'} className="rate__links-nav">
                            Тарифы для дома
                        </NavLink>
                    </div>
                    <h2 className="title">
                        тарифы для дома
                    </h2>
                    <RateInfo/>
                    <RateCall/>
                    <RateAddress/>
                </div>
            </section>
        </main>
    );
};

export default ForHome;