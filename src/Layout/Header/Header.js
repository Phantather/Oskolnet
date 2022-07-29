import React from 'react';
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <HeaderLeft/>
                    <HeaderRight/>
                </nav>
            </div>
        </header>
    );
};

export default Header;