import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        {
            user && <li><Link to={"/dashboard"}>Dashboard</Link></li>
        }
    </>
    return (
        <div className=" flex navbar bg-neutral text-white">
            <div className=" flex-1 navbar-start lg:ml-60 md:ml-40 sm:ml-0">
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
            <div className=" flex-1 navbar-end lg:ml-30 md:ml-30">
                <div className='pr-5 mb-2'>
                    <h1 className='text-2xl'>part<span className='text-secondary text-3xl font-bold'>Ex</span></h1>
                </div>
                <label tabIndex="1" for="db-sidebar" className="btn btn-ghost lg:hidden bg-neutral">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <div className='flex'>
                    <button className="flex-1  btn btn-outline btn-sm mr-3 text-white"><Link to="/signup">Sign up</Link></button>
                    <button className="flex-1  btn btn-outline btn-sm text-white">{user ? <button className='btn btn-ghost btn-sm' onClick={logout}>Sign out</button> : <Link to="/login">Log in</Link>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;