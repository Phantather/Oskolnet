import React from 'react';
import {Link} from "react-router-dom";

const FooterList = ({link1, link2, link3}) => {
    return (
        <>
            <ul className="footer__list">
                <li className="footer__item">
                    <Link className="footer__link" to={'/about'}>
                        О компании
                    </Link>
                </li>
                <li className="footer__item">
                    <Link className="footer__link" to={'/news'}>
                        Новости
                    </Link>
                </li>
                <li className="footer__item">
                    <Link className="footer__link" to={'/document'}>
                        Документы
                    </Link>
                </li>
            </ul>
            <ul className="footer__list">
                <li className="footer__item">
                    <Link className="footer__link" to={'/forHome'}>
                        Тарифы для дома
                    </Link>
                </li>
                <li className="footer__item">
                    <Link className="footer__link" to={'/forBusiness'}>
                        Тарифы для бизнеса
                    </Link>
                </li>
                <li className="footer__item">
                    <Link className="footer__link" to={'/contact'}>
                        Контакты
                    </Link>
                </li>
            </ul>
            <ul className="footer__list">
                <li className="footer__item">
                    <Link className="footer__link" to={'/test'}>
                        Тест скорости
                    </Link>
                </li>
                <li className="footer__item">
                    <Link className="footer__link" to={'/map'}>
                        Карта покрытия
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default FooterList;