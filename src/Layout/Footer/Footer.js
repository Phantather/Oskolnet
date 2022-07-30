import React from 'react';
import FooterList from "./FooterList";
import FooterCallBack from "./FooterCallBack";
import FooterBottom from "./FooterBottom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__nav">
                    <FooterList/>
                    <FooterCallBack/>
                </nav>
                <FooterBottom/>
            </div>
        </footer>
    );
};

export default Footer;