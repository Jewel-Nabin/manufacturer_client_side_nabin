import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start ml-10">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box lg:max-w-lg">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div>
                <a className="btn btn-ghost normal-case text-xl navbar-center">partEx</a>
            </div>
            <div class="navbar-end mr-10">
                <button class="btn btn-outline btn-accent btn-sm mr-1">Sign up</button>
                <button class="btn btn-outline btn-accent btn-sm ml-1">Log in</button>
            </div>
        </div>
    );
};

export default Navbar;