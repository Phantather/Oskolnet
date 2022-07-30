import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "../pages/Main/Main";
import {Routes, Route} from "react-router-dom";
import Document from "../pages/Document/Document";
import ForHome from "../pages/ForHome/ForHome";
import ForBusiness from "../pages/ForBusiness/ForBusiness";

const Layout = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/document'} element={<Document/>}/>
                <Route path={'/forHome'} element={<ForHome/>}/>
                <Route path={'/forBusiness'} element={<ForBusiness/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default Layout;