import React from "react";
import Course from "../../components/Course/Course";
import "./Courses";
import { allCourses } from "../../data";
import "./Courses.css";

const Courses = () => {
    return (
        <div className="courses-body pb-5">
            <div className="courses-banner">
                <div className="container">
                    <h1 className="page-heading">Courses</h1>
                    <h3 className="page-sub">
                        Learn to your heart content. We have vast collections of
                        popular courses regarding current state.
                    </h3>
                </div>
            </div>
            <div className="container all-courses pt-5">
                {/* all course load in here  */}
                <div className="row">
                    {allCourses.map((course) => (
                        <Course Course={course} key={course.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
