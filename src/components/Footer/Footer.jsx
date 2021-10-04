import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-body py-5">
            <div className="container">
                <div className="row">
                    {/* about area  */}
                    <div className="col-lg-3">
                        <h1>Learnify</h1>
                        <p>
                            The one and only platform that updates and ensures
                            the lessons quality very frequently. The best
                            platform to guide you to a better future.
                        </p>
                        <ul className="d-flex">
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
                    {/* newsletter area part  */}
                    <div className="col-lg-3">
                        <h1>Newsletter Signup</h1>
                        <p>
                            Enter your email address to get latest updates and
                            offers from us.
                        </p>
                        <div className="form">
                            <form className="footer-form">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="form-control footer-input"
                                        id="email"
                                    />
                                </div>
                                <button className="btn footer-btn">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* courses area part  */}
                    <div className="col-lg-3">
                        <h1>Our Courses</h1>
                        <ul>
                            <li>
                                <i className="fas fa-book-open"></i> Learn C++
                            </li>
                            <li>
                                <i className="fas fa-book-open"></i> Learn
                                Advance Programming
                            </li>
                            <li>
                                <i className="fas fa-book-open"></i> Learn
                                Data-Science
                            </li>
                            <li>
                                <i className="fas fa-book-open"></i> Learn React
                                Development
                            </li>
                            <li>
                                <i className="fas fa-book-open"></i> Learn
                                MongoDb
                            </li>
                        </ul>
                    </div>
                    {/* contact area part  */}
                    <div className="col-lg-3 contact">
                        <h1>Contact Us</h1>
                        <div className="d-flex align-items-center">
                            <i className="far fa-paper-plane"></i>
                            <p>learn.to.drive@drivega.com</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="far fa-clock"></i>
                            <p>Mon - Fri : 9:00am to 7:00pm</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="far fa-envelope-open"></i>
                            <p>learn.to.drive@drivega.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
