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

const Layout = () => {

    const location = useLocation();

    return (
        <>
             <Header/>

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
                <Route path={'/*'} element={<NotFound/>}/>
            </Routes>

           <Footer/>


        </>
    );
};

export default Layout;