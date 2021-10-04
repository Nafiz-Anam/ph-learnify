import React from 'react';
import './Contact.css'
import bg from '../../images/contact-bg.jpg'

const Contact = () => {
    return (
        <div className='contact-body pb-5'>
            {/* page banner here */}
            <div className="contact-banner">
                <div className="container">
                    <h1 className='page-heading'>contact Us</h1>
                    <h3 className='page-sub'>Learnify Helping you to learn efficiently</h3>
                </div>
            </div>
            {/* page body here  */}
            <div className="container py-5 my-5">
                <div className="row text-center">
                    <div className="col-lg-4">
                        <div className="icon-box">
                            <div className="icon">
                            <i className="fas fa-map-pin"></i>
                        </div>
                        </div>
                        
                        <h2>Office Address</h2>
                        <p>72 MainSail Drive, St. 12/B <br />Calibry, Florida 25502 - USA</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon-box">
                        <div className="icon">
                            <i className="fas fa-phone-alt"></i>
                        </div></div>
                        <h2>Office Address</h2>
                        <p>Hotline: 0800 60020<br />Mob: +1 (246) 333 0791</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon-box">
                            <div className="icon">
                        
                            <i className="far fa-paper-plane"></i>
                        </div></div>
                        <h2>Office Address</h2>
                        <p>learning@drivega.net<br />support@thedomain.com</p>
                    </div>
                </div>
                {/* map  */}
                <div className="map py-5">
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14710.423366238587!2d89.55679903664178!3d22.817064639553834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff90193c82d64b%3A0xd48ce5c464563d6d!2sKhulna%20City%2C%20Khulna!5e0!3m2!1sen!2sbd!4v1633335872341!5m2!1sen!2sbd" width="100%" height="450" loading="lazy"></iframe>
                </div>
                {/* form here  */}
                <div className="form">
                    <div className="row align-items-center py-5">
                    <div className="col-lg-6">
                        <img className='contact-bg' src={bg} alt=''/>
                    </div>
                    <div className="col-lg-6">
                        <h1>Any Questions? Fill-In The Form & Send Today!</h1>
                        <form>
                            <div className="mb-3">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label for="Phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="Phone" />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email"  />
                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Message</label>
                                <textarea class="form-control"></textarea>
                            </div>
                            <button className="btn form-btn">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;