import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "../pages/Main/Main";
import {Routes, Route} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default Layout;