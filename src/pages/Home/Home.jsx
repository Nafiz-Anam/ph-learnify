import React from 'react';
import './Home.css'
import { allCourses } from '../../data'
import Course from '../../components/Course/Course';
import person1 from '../../images/testimonial-avata-01.jpg'
import person2 from '../../images/testimonial-avata-02.jpg'
import person3 from '../../images/testimonial-avata-03.jpg'
import person4 from '../../images/testimonial-avata-04.jpg'
import { Link } from 'react-router-dom';

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
                <div className="home-icon">
                    <i class="fad fa-arrow-alt-up"></i>
                </div>
            </div>
            </div>
            <div className="container pb-5">
                <h1 className='pb-4 course-h1 text-center'>Latest Courses</h1>
                <div className="row">
                    {
                    allCourses.slice(0,4).map((course=>(
                        <Course Course={course} key={course.id} />
                    )))
                }
                </div>
                <div className='text-center pt-4'>
                    <Link to='/courses'><button className='btn course-btn'>All Courses</button></Link>
                </div>

                {/* testimonial here  */}
                <div className="feedback text-center py-5">
                    <h1 className="pt-3 pb-5">What out students say about us</h1>
                    <div className="cards">
                        <div className="card text-center">
                            <div className="card-body">
                                <p className="card-text">I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.</p>
                            </div>
                            <h5>James Cordy</h5>
                            <div className="d-flex feed-box">
                                <img src={person1} className="card-img-top feed-img" alt="..." />
                            </div>
                            
                        </div>
                        <div className="card text-center">
                            <div className="card-body">
                                <p className="card-text">I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.	</p>
                            </div>
                            <h5>Jasica Jouly</h5>
                            <div className="d-flex feed-box">
                                <img src={person2} className="card-img-top feed-img" alt="..." />
                            </div>
                            
                        </div>
                        <div className="card text-center">
                            <div className="card-body">
                                <p className="card-text">I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.</p>
                            </div>
                            <h5>Henry Clinton</h5>
                            <div className="d-flex feed-box">
                                <img src={person3} className="card-img-top feed-img" alt="..." />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="newsletter text-center">
                    <h1>Subscribe Newsletters</h1>
                    <p>Enter your email address to register to our newsletter subscription delivered on a regular basis!</p>
                    <div className="form">
                        <form>
                            <div>
                                <input type="email" placeholder='Enter your email' className="form-control home-input" id="email"  />
                            </div>
                            <button className="btn form-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default Home;