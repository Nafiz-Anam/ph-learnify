import React from 'react';
import './Course.css'

const Course = (props) => {
    console.log(props);
    // destructuring the data
    const { title, img, creator, ratings, price, desc } = props.Course;
    return (
        <div className="col-lg-3">
        <div className="course-card">
            <img src={img} className="card-img-top" alt="" />
            <div className="card-body py-4">
                <h1 className="card-title"> {title}</h1>
                <h5>{desc}</h5>
                <p>Created by : <b>{creator}</b></p>
                <p className='mt-2 star'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i> <b>{ratings}</b></p>
                <h6>${price}</h6>
                <button className='btn course-btn m-2'>Enroll</button>
                <button className='btn course-btn btn2 m-2'>Add to Cart</button>
            </div>
        </div>
        </div>
    );
};

export default Course;