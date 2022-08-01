import React from 'react';
import {NavLink} from "react-router-dom";
import RateAddress from "../../components/Rate/RateAddress";
import MapInfo from "./MapInfo";

const Map = () => {
    return (
        <main>
            <section className="map">
                <div className="container">
                    <div className="rate__links">
                        <NavLink to={'/'} className="rate__links-nav">
                            Главная
                        </NavLink>
                        /
                        <NavLink to={'/news'} className="rate__links-nav">
                            Карта покрытия
                        </NavLink>
                    </div>
                    <h2 className="title">
                        Карта покрытия
                    </h2>
                    <RateAddress/>
                    <MapInfo/>
                </div>
            </section>
        </main>
    );
};

export default Map;