import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "../pages/Main/Main";
import {Routes, Route} from "react-router-dom";
import Document from "../pages/Document/Document";

const Layout = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/document'} element={<Document/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default Layout;