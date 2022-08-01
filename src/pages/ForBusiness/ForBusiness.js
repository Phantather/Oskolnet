import React from 'react';
import RateInfo from "../../components/Rate/RateInfo/RateInfo";
import RateCall from "../../components/Rate/RateCall";
import RateAddress from "../../components/Rate/RateAddress";
import {NavLink} from "react-router-dom";

const ForBusiness = () => {
    return (
        <main>
            <section className="rate">
                <div className="container">
                    <div className="rate__links">
                        <NavLink to={'/'} className="rate__links-nav">
                            Главная
                        </NavLink>
                        /
                        <NavLink to={'/forBusiness'} className="rate__links-nav">
                            Тарифы для бизнеса
                        </NavLink>
                    </div>
                    <h2 className="title">
                        тарифы для бизнеса
                    </h2>
                    <RateInfo/>
                    <RateCall/>
                    <RateAddress/>
                </div>
            </section>
        </main>

    );
};

export default ForBusiness;