import React from 'react';
import Begin from "./Begin/Begin";
import Rate from "./Rate/Rate";
import News from "./News/News";
import About from "./About/About";

const Main = () => {
    return (
        <main>
            <Begin/>
            <Rate/>
            <About/>
            <News/>
        </main>
    );
};

export default Main;