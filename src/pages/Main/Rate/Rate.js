import React from 'react';
import RateInfo from "./RateInfo/RateInfo";

const Rate = () => {
    return (
        <section className="rate">
            <div className="container">
                <h2 className="title">
                    тарифы для дома
                </h2>
                <RateInfo/>
            </div>
        </section>
    );
};

export default Rate;