import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className='flex flex-col flex-1 '>
            <Navber></Navber>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;