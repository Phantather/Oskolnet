import React from 'react';
import {NavLink} from "react-router-dom";
import ContactBlock from "./ContactBlock";

const Contact = () => {
    return (
        <main>
            <section className="contact">
                <div className="container">
                    <div className="rate__links">
                        <NavLink to={'/'} className="rate__links-nav">
                            Главная
                        </NavLink>
                        /
                        <NavLink to={'/contact'} className="rate__links-nav">
                            Контакты
                        </NavLink>
                    </div>
                    <h2 className="title">
                        Контакты
                    </h2>
                    <ContactBlock/>
                </div>
            </section>
        </main>
    );
};

export default Contact;