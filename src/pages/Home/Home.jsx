import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-body'>
            <div className="banner">
                <div className="container text-center">
                <h1>Helping you to make yourself an expert in programming</h1>
                <div className="banner-btn pt-5">
                    <button className='btn btn-info m-1'>Get Enrolled <i class="fad fa-long-arrow-alt-right"></i></button>
                    <button className='btn btn-warning m-1'>Learn More <i class="fad fa-long-arrow-alt-right"></i></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;