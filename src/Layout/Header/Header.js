import React from 'react';
import {Link} from "react-router-dom";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <HeaderRight/>
                    <HeaderLeft/>
                </nav>
            </div>
        </header>
    );
};

export default Header;