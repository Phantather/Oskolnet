import React from 'react';
import {NavLink} from "react-router-dom";
import DocumentList from "./DocumentList";

const Document = () => {
    return (
        <main>
            <section className="document">
                <div className="container">
                    <div className="rate__links">
                        <NavLink to={'/'} className="rate__links-nav">
                            Главная
                        </NavLink>
                        /
                        <NavLink to={'/document'} className="rate__links-nav">
                            Документы
                        </NavLink>
                    </div>
                    <h2 className="title">
                        Документы
                    </h2>
                    <DocumentList
                        title={'Договоры'}
                        text1={'Договор оферты на оказание услуг связи (Интернет)'}
                        text2={'Договор оферты на оказание услуг связи (Цифровое Телевидение)'}
                        price1={'758,55 Кб'}
                        price2={'758,55 Кб'}
                    />
                    <DocumentList
                        title={'Договоры'}
                        text1={'Договор оферты на оказание услуг связи (Интернет)'}
                        text2={'Договор оферты на оказание услуг связи (Цифровое Телевидение)'}
                        price1={'758,55 Кб'}
                        price2={'758,55 Кб'}
                    />
                    <DocumentList
                        title={'Договоры'}
                        text1={'Договор оферты на оказание услуг связи (Интернет)'}
                        text2={'Договор оферты на оказание услуг связи (Цифровое Телевидение)'}
                        price1={'758,55 Кб'}
                        price2={'758,55 Кб'}
                    />
                    <DocumentList
                        title={'Договоры'}
                        text1={'Договор оферты на оказание услуг связи (Интернет)'}
                        text2={'Договор оферты на оказание услуг связи (Цифровое Телевидение)'}
                        price1={'758,55 Кб'}
                        price2={'758,55 Кб'}
                    />
                </div>
            </section>
        </main>
    );
};

export default Document;