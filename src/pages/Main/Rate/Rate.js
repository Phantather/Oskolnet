import React from 'react';
import RateInfo from "./RateInfo/RateInfo";
import RateCall from "./RateCall";
import RateAddress from "./RateAddress";
import RateSpeed from "./RateSpeed";

const Rate = () => {
    return (
        <section className="rate">
            <div className="container">
                <h2 className="title">
                    тарифы для дома
                </h2>
                <RateInfo/>
                <RateCall/>
                <RateAddress/>
                <RateSpeed/>
            </div>
        </section>
    );
};

export default Rate;