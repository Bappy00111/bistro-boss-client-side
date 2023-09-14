import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Sheared/Footer';
import Navber from '../pages/Sheared/Navber';

const Main = () => {
    const location = useLocation()
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            {noHeaderFooter || <Navber></Navber>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;