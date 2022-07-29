import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "../pages/Main/Main";

const Layout = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
};

export default Layout;