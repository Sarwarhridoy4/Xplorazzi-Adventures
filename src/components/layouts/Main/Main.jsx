import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/shared/footer/Footer';
import Header from '../../pages/shared/header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;