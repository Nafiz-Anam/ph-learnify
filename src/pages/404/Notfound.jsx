import React from 'react';
import './Notfound.css'

const Notfound = () => {
    return (
        <div className='pb-5'>
            <div className="notfound-banner">
                <div className="container">
                    <h1 className='page-heading'>Error Page</h1>
                    <h3 className='page-sub'>Home > 404 - Not found</h3>
                </div>
            </div>
            <div className="container content-404 text-center">
                <h1>404</h1>
                <h3>Sorry but we couldn't find this page</h3>
                <p>This page you are looking for does not exist <b>Report this</b></p>
                <div className="notfound-form pt-5">
                    <form className='d-flex justify-content-center'>
                        <div>
                            <input type="email" placeholder='Enter your search' className="form-control notfound-input" id="email"  />
                        </div>
                        <button className="btn notfound-btn">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Notfound;