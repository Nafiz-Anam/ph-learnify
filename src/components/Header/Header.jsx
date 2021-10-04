import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
    return (
        <div className="shadow-sm bg-body">
            <div className="header-body pt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-4 d-flex align-items-center">
                                    <i className="far fa-paper-plane"></i>
                                    <p>72 Main Drive, Calibry, FL</p>
                                </div>
                                <div className="col-4 d-flex align-items-center">
                                    <i className="far fa-envelope-open"></i>
                                    <p>learn.to.drive@drivega.com</p>
                                </div>
                                <div className="col-4 d-flex align-items-center">
                                    <i className="far fa-clock"></i>
                                    <p>Mon - Fri : 9:00am to 7:00pm</p>
                                </div>
                            </div>
                        </div>
                        {/* social area here  */}
                        <div className="col-lg-5">
                            <ul className="d-flex social">
                                <li>
                                    <i className="fab fa-facebook-f"></i>
                                </li>
                                <li>
                                    <i className="fab fa-instagram"></i>
                                </li>
                                <li>
                                    <i className="fab fa-twitter"></i>
                                </li>
                                <li>
                                    <i className="fab fa-linkedin-in"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* loading navbar here  */}
            <Navbar />
        </div>
    );
};

export default Header;
