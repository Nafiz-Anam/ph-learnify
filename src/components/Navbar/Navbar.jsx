import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <h1 className="navbar-brand"><span>L</span>earnify</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink to='./home'>Home</NavLink></li>
                        <li className="nav-item"><NavLink to='./about'>About</NavLink></li>
                        <li className="nav-item"><NavLink to='./courses'>Courses</NavLink></li>
                        <li className="nav-item"><NavLink to='./contact'>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className='d-flex phone'>
                    <i className="fas fa-phone-volume"></i>
                    <div>
                        <p>Have any queries? Call Us</p>
                        <h3>+880 1819 758 093</h3>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;