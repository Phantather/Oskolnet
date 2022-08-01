import React from 'react';
import RateInfo from "../../../components/Rate/RateInfo/RateInfo";
import RateCall from "../../../components/Rate/RateCall";
import RateAddress from "../../../components/Rate/RateAddress";
import RateSpeed from "../../../components/Rate/RateSpeed";

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