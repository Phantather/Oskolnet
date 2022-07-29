import React from 'react';
import AboutRow from "./AboutRow";

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h2 className="title">
                    О компании
                </h2>
                <AboutRow/>
                <button className="btn about__btn">
                    Подробно о компании
                </button>
            </div>
        </section>
    );
};

export default About;