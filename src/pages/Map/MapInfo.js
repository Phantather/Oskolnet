import React from 'react';
import MapList from "./MapList";

const MapInfo = () => {
    return (
        <div className="map__info">
            <h3 className="map__info-title">
                Адреса, по которым имеется техническая возможность подключения:
            </h3>
            <MapList/>
        </div>
    );
};

export default MapInfo;