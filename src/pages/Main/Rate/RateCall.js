import React from 'react';

const RateCall = () => {
    return (
        <div className="rate__call">
            <h3 className="rate__call-title">
                Трудно выбрать? Мы поможем!
            </h3>
            <form action="" className="rate__call-form">
                <div className="rate__call-block">
                    <input className="rate__call-input" type="text" placeholder="+7 (___) ___-__-__ *"/>
                    <input className="rate__call-input" type="text" placeholder="Как Вас зовут? *"/>
                    <button className="btn rate__call-btn" type="submit">
                        Жду звонка
                    </button>
                </div>
                <div className="rate__call-blockSecond">
                    <input type="checkbox" className="rate__call-check"/>
                    <p className="rate__call-text">
                        Нажимая на кнопку, я даю согласие на обработку персональных данных
                    </p>
                </div>

            </form>
        </div>
    );
};

export default RateCall;