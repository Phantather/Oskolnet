import React from 'react';
import img from '../../assets/about/missionImg2.png'
import img2 from '../../assets/about/missionImg.png'

const AboutMission = () => {
    return (
        <>
            <div className="about__mission">
                <div className="about__mission-info">
                    <h3 className="about__title">
                        Миссия компании
                    </h3>
                    <p className="about__mission-text">
                        Основная цель деятельности компании IT-Telecom заключается в предоставлении Заказчикам качественных и надёжных услуг, основанных на высоком профессионализме наших сотрудников и применении современных и инновационных технологий.
                    </p>
                    <p className="about__mission-text">
                        Мы стремимся максимально полно удовлетворять потребности и пожелания наших Заказчиков, демонстрируя гибкий и индивидуальный подход к запросам каждого из них.
                    </p>
                </div>
                <img src={img} alt="img" className="about__mission-img"/>
            </div>
            <div className="about__mission">
                <img src={img2} alt="img" className="about__mission-img"/>

                <div className="about__mission-info">
                    <p className="about__mission-text">
                        Закрытое акционерное общество «Осколнэт» основано 4 апреля 1997 года.
                    </p>
                    <p className="about__mission-text">

                        Сегодня – это крупнейшая компания в Старом Осколе с широким спектром телекоммуникационных услуг: Интернет, телефония, IP телевидение, видеонаблюдение.


                    </p>
                    <p className="about__mission-text">


                        Мы улучшаем качество жизни людей, предоставляя возможность свободного общения в информационном сообществе. Предлагаем самые современные Интернет технологии наивысшего качества.

                    </p>
                    <p className="about__mission-text">
                        За долгие годы работы «Осколнэт» зарекомендовал себя как надежный провайдер, предоставляющий качественную услугу за доступную цену.
                    </p>
                </div>
            </div>
        </>

    );
};

export default AboutMission;