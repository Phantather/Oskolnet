import React from 'react';

const MapList = () => {
    return (
        <ul className="map__list">
            <li className="map__item">
                <div className="map__item-street">
                    <h4 className="map__item-title">
                        Микрорайон / улица
                    </h4>
                </div>
                <div className="map__item-home">
                    <p className="map__item-title">
                        Дом
                    </p>
                </div>
            </li>
            <li className="map__item">
                <div className="map__item-street">
                    <h4 className="map__item-location">
                        Буденного мкр.
                    </h4>
                </div>
                <div className="map__item-home">
                    <p className="map__item-location">
                        1, 2, 3, 4, 5, 6, 6В, 7, 7А
                    </p>
                </div>
            </li>
        </ul>
    );
};

export default MapList;