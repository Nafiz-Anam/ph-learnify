import React from 'react';
import Course from '../../components/Course/Course'
import './Courses'

const Courses = () => {
    return (
        <div className='courses-body'>
            <div className="courses-banner">
                <div className="container">
                    <h1 className='page-heading'>Courses</h1>
                    <h3 className='page-sub'>Learn to your heart content. We have vast collections of popular courses regarding current state.</h3>
                </div>
            </div>
            <Course />
        </div>
    );
};

export default Courses;