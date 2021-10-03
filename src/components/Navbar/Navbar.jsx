import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to='./home'>Home</NavLink>
            <NavLink to='./about'>About</NavLink>
            <NavLink to='./courses'>Courses</NavLink>
            <NavLink to='./contact'>Contact Us</NavLink>
        </nav>
    );
};

export default Navbar;