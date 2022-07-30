import React from 'react';

import card from '../../assets/about/card.png'
import card2 from '../../assets/about/card2.png'
import card3 from '../../assets/about/card3.png'

const AboutGallery = () => {
    return (
        <div className="about__gallery">
            <h3 className="about__title">
                Фотогалерея
            </h3>
            <div className="about__gallery-row">
                <div className="about__gallery-card">
                    <img src={card} alt="card"/>
                </div>
                <div className="about__gallery-card">
                    <img src={card2} alt="card"/>
                </div>
                <div className="about__gallery-card">
                    <img src={card3} alt="card"/>
                </div>
            </div>
        </div>
    );
};

export default AboutGallery;