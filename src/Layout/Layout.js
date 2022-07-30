import React from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "../pages/Main/Main";
import Document from "../pages/Document/Document";
import ForHome from "../pages/ForHome/ForHome";
import ForBusiness from "../pages/ForBusiness/ForBusiness";
import News from "../pages/News/News";
import Contact from "../pages/Contact/Contact";
import Pay from "../pages/Pay/Pay";
import About from "../pages/About/About";
import Test from "../pages/Test/Test";
import NotFound from "../pages/NotFound/NotFound";
import Map from "../pages/Map/Map";

const Layout = () => {

    const location = useLocation();

    return (
        <>
            {
                location.pathname === '/*' ? "" : <Header/>
            }

            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/document'} element={<Document/>}/>
                <Route path={'/forHome'} element={<ForHome/>}/>
                <Route path={'/forBusiness'} element={<ForBusiness/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'/pay'} element={<Pay/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/test'} element={<Test/>}/>
                <Route path={'/map'} element={<Map/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Routes>

            {
                location.pathname === '/*' ? "" :   <Footer/>
            }



        </>
    );
};

export default Layout;