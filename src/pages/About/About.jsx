import React from "react";
import "./About.css";
import logo from "../../images/envato.png";
import team1 from "../../images/team (1).jpg";
import team2 from "../../images/team (2).jpg";
import team3 from "../../images/team (3).jpg";
import team4 from "../../images/team (4).jpg";
import top1 from "../../images/top (1).jpg";
import top2 from "../../images/top (2).jpg";

const About = () => {
    return (
        <div className="about-body">
            {/* banner area here  */}
            <div className="about-banner">
                <div className="container">
                    <h1 className="page-heading">About Us</h1>
                    <h3 className="page-sub">
                        Learnify Helping you to learn with an ease
                    </h3>
                </div>
            </div>
            {/* body area here  */}
            <div className="container text-center">
                <div className="intro py-5">
                    <h1>Let’s do study with expert teachers</h1>
                    <div className="row">
                        <div className="col-6">
                            <img src={top1} alt="" />
                        </div>
                        <div className="col-6">
                            <img src={top2} alt="" />
                        </div>
                    </div>
                    {/* overlap area here  */}
                    <div className="overlap">
                        <div className="content">
                            <h5>5000+</h5>
                            <p className="mt-2 star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </p>
                            <h5>STUDENTS LOVED US</h5>
                        </div>
                    </div>
                    <p className="about-p">
                        There are many variations of passages of lorem ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour words which don't look
                        even slightly believable. Lorem Ipsn gravida nibh vel
                        velit auctor aliquetn auci elit cons.
                    </p>
                    <button className="btn about-btn">
                        Start Learning Now
                    </button>
                </div>
                {/* team here  */}
                <div className="team pt-5">
                    <h1 className="pb-5 mb-5">Meet the best teachers</h1>
                    <div className="cards">
                        <div className="card align-items-center">
                            <div className="team-img">
                                <img
                                    src={team1}
                                    className="card-img-top team-img"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Christina Newman</h5>
                                <p className="card-text">Teacher</p>
                                <div className="card-footer">
                                    <ul className="d-flex team-social">
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
                        <div className="card align-items-center">
                            <div className="team-img">
                                <img
                                    src={team2}
                                    className="card-img-top team-img"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Christina Newman</h5>
                                <p className="card-text">Teacher</p>
                                <div className="card-footer">
                                    <ul className="d-flex team-social">
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
                        <div className="card align-items-center">
                            <div className="team-img">
                                <img
                                    src={team3}
                                    className="card-img-top team-img"
                                    alt="..."
                                />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Christina Newman</h5>
                                <p className="card-text">Teacher</p>
                                <div className="card-footer">
                                    <ul className="d-flex team-social">
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
                        <div className="card align-items-center">
                            <div className="team-img">
                                <img
                                    src={team4}
                                    className="card-img-top team-img"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Christina Newman</h5>
                                <p className="card-text">Teacher</p>
                                <div className="card-footer">
                                    <ul className="d-flex team-social">
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
                </div>
                {/* partners here  */}
                <div className="partners py-5 my-5">
                    <h1 className="pb-5 mb-5">Our company & partners</h1>
                    <div className="logos">
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            {/* mission here  */}
            <div className="mission">
                <h1>Our mission is to extend your knowledge base</h1>
                <button className="btn mission-btn">Learn More</button>
            </div>
        </div>
    );
};

export default About;
