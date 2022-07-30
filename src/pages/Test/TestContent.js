import React from 'react';

import img from '../../assets/test/testImg.png'
import img2 from '../../assets/test/testImg2.png'

const TestContent = () => {
    return (
        <div className="test__content">
            <div className="test__speed">
                <img src={img} alt=""/>
                <img src={img2} alt=""/>
            </div>
            <p className="test__text">
                Уважаемые абоненты, вы можете замерить скорость соединения, нажав на кнопку <br/>
                «Тестировать»
            </p>
            <button className="btn test__btn" type="button">
                Тестировать
            </button>
        </div>
    );
};

export default TestContent;