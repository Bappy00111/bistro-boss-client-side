import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    const navOption = <div className='text-black'>
        <Link><li>Home</li></Link>
        <Link><li>CONTACT us</li></Link>
        <Link><li>DASHBOARD</li></Link>
        <Link><li>Our Menu</li></Link>
        <Link><li>Our Shop</li></Link>
    </div>
    return (
        <div className="navbar fixed max-w-screen-xl z-10 bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl hid lg:block">BISTRO BOSS</a>
            </div>
        
            <div className="navbar-end">
                <ul className='hidden lg:flex space-x-5 px-5'>
                    <Link><li>Home</li></Link>
                    <Link><li>CONTACT us</li></Link>
                    <Link><li>DASHBOARD</li></Link>
                    <Link><li>Our Menu</li></Link>
                    <Link><li>Our Shop</li></Link>
                </ul>

                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navber;