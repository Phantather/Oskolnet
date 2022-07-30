import React from 'react';

import dynamicImg from '../../assets/about/dynamicImg.png'

const AboutDynamic = () => {
    return (
        <div className="about__dynamic">
            <h3 className="about__title">
                Динамика развития
            </h3>
            <div className="about__dynamic-row">
                <ul className="about__dynamic-list">
                    <li className="about__dynamic-item">
                        <h4 className="about__dynamic-title">
                            > 25
                        </h4>
                        <p className="about__dynamic-text">
                            лет истории
                        </p>
                    </li>
                    <li className="about__dynamic-item">
                        <h4 className="about__dynamic-title">
                            > 50

                        </h4>
                        <p className="about__dynamic-text">
                            сотрудников
                        </p>
                    </li>
                    <li className="about__dynamic-item">
                        <h4 className="about__dynamic-title">
                            > 450

                        </h4>
                        <p className="about__dynamic-text">
                            подключенных домов
                        </p>
                    </li>
                    <li className="about__dynamic-item">
                        <h4 className="about__dynamic-title">
                            > 5000

                        </h4>
                        <p className="about__dynamic-text">
                            Гб данных передаются каждую минуту
                        </p>
                    </li>
                </ul>
                <img src={dynamicImg} alt="" className="about__dynamic-img"/>
            </div>
        </div>
    );
};

export default AboutDynamic;