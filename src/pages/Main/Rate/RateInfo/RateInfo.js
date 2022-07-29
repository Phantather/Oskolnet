import React from 'react';
import RateList from "./RateList";
import RateRow from "./RateRow";

const RateInfo = () => {
    return (
        <div className="rate__info">
            <RateList/>
            <RateRow/>
            <button className="btn rate__btn">
                Все тарифы
            </button>
        </div>
    );
};

export default RateInfo;