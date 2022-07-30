import React from 'react';
import AboutRow from "./AboutRow";
import {useNavigate} from "react-router-dom";


const About = () => {
    const navigate = useNavigate();
    return (
        <section className="about">
            <div className="container">
                <h2 className="title">
                    О компании
                </h2>
                <AboutRow/>
                <button className="btn about__btn" onClick={() => navigate('/about')}>
                    Подробно о компании
                </button>
            </div>
        </section>
    );
};

export default About;