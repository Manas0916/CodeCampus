import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import cover from './images/cover.png'

const About = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className='container my-5'>

                <div className='container my-5 p-3'>
                    <img src={cover} className="d-block w-100 mt-5" alt="..." style={{ border: '0.5px solid pink', borderRadius: '25px' }} />
                </div>
           
                <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h1 className='mt-3'><strong>About Us</strong></h1>
                </div>

                <div className="h5 container text-start mt-5">
                    <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        Welcome to CodeCampus, an online learning website dedicated to helping students learn how to code. Our mission is to provide a supportive and engaging learning environment that empowers students to achieve their goals and build a brighter future.
                    </p>
                </div>

                <div className="h5 container text-start my-3">
                    <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        We believe that coding is an essential skill in today's world, and we're committed to providing high-quality resources and support to our community.
                    </p>
                </div>

                <div className="h5 container text-start my-3">
                    <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        Our team provides all the necessary resources for the students to enhance their coding skills. We're constantly updating the resources to ensure that our students are learning the latest tools and technologies.
                    </p>
                </div>

                <div className="h5 container text-start my-3">
                    <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        At CodeCampus, we believe in creating a supportive and inclusive learning environment. We're dedicated to fostering a community of learners who are passionate about coding and eager to share their knowledge with others. Whether you're just starting out or looking to take your skills to the next level, we're here to help you achieve your goals.
                    </p>
                </div>

                <div className="h5 container text-start my-3">
                    <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        We believe that everyone should have access to high-quality coding education, regardless of their background or experience level. That's why we offer a range of Documentations and Coding sheets that cater to both beginners and advanced coders alike.
                    </p>
                </div>

                <div className="h5 container text-start my-3 mb-5 pb-3">
                    <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        At CodeCampus, we're committed to providing an inclusive and welcoming learning environment that fosters a sense of community and belonging. We believe that coding has the power to change the world, and we're excited to be a part of that change. Join us on this exciting journey and discover the joy of coding today!
                    </p>
                </div>
                <div className='mb-5'>

                </div>

            </div>
        </>
    );
}
export default About;