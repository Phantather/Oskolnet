import React from 'react';
import {NavLink} from "react-router-dom";
import AboutMission from "./AboutMission";
import AboutDynamic from "./AboutDynamic";
import AboutBest from "./AboutBest";
import AboutGallery from "./AboutGallery";



const About = () => {
    return (
        <main>
            <section className="about">
                <div className="container">
                    <div className="rate__links">
                        <NavLink to={'/'} className="rate__links-nav">
                            Главная
                        </NavLink>
                        /
                        <NavLink to={'/about'} className="rate__links-nav">
                            О компании
                        </NavLink>
                    </div>
                    <h2 className="title">
                        О компании
                    </h2>
                    <AboutMission/>
                    <AboutDynamic/>
                    <AboutBest/>
                    <AboutGallery/>
                </div>
            </section>
        </main>
    );
};

export default About;