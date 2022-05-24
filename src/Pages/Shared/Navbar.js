import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-neutral text-white">
            <div className="navbar-start ml-10">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden bg-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content shadow bg-neutral rounded-box lg:max-w-lg">
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
                <h1 className='text-2xl'>part<span className='text-secondary text-3xl font-bold'>Ex</span></h1>
            </div>
            <div className="navbar-end mr-10">
                <button className="btn btn-outline btn-sm mr-1 text-white">Sign up</button>
                <button className="btn btn-outline btn-sm ml-1 text-white"><Link to="/login">Log in</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;