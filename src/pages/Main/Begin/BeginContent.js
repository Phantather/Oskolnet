import React from 'react';
import img from '../../../assets/begin/beginImg.png'

const BeginContent = () => {
    return (
        <div className="begin__content">
            <div className="begin__content-left">
                <h2 className="begin__content-title">
                    ИНТЕРНЕТ
                    <br/>
                    <span className="begin__content-small">
                        на высокой скорости
                    </span>
                </h2>
                <button className="btn begin__content-btnLight" type="button">
                    Выбрать тариф
                </button>
            </div>
            <img src={img} alt="beginImg"/>
        </div>
    );
};

export default BeginContent;