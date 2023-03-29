import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

const Contact = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z1sawkh', 'template_9t9pkqc', form.current, 'a2e3HA2VbH4dJLZ9z')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                alert("Message sent Successfully");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div className='container my-5 pt-5'>
                <div classNmae="container my-5 pt-5">
                    <h2 style={{ color: props.mode === 'dark' ? '#9235e4' : 'black', fontSize: '40px' }}><strong>Contact Us</strong></h2>
                </div>
                <div className='container text-center mt-4 p-4'>
                    <p style={{color: props.mode === 'dark' ? '#cf2d2d' : '#7a5754', fontSize: '1.3rem'}}><strong>Do you see anything you would like to be improved? Or maybe you have a functionality in mind you would like to see? Enter it in the suggestion box below. <br/>Thank you</strong></p>
                </div>
                <div className='container mt-1 mb-5 pb-5' style={{ borderRadius: '20px', backgroundColor: props.mode==='dark'?'#818081':'#f1f1f1' }}>
                    <form className="mt-5" ref={form} onSubmit={sendEmail}>
                        <div className="mb-3 text-start mt-5">
                            <label for="name" className="form-label" style={{ color: props.mode === 'dark' ? '#ffc007' : 'black', fontSize: '30px' }}><strong>Name</strong></label>
                            <input type="text" name="user_name" className="form-control" placeholder="Enter your name" style={{ borderRadius: '15px' }} required/>
                        </div>
                        <div className="mb-3 text-start">
                            <label for="email address" className="form-label" style={{ color: props.mode === 'dark' ? '#ffc007' : 'black', fontSize: '30px' }}><strong>Email Address</strong></label>
                            <input type="email" name="user_email" className="form-control" placeholder="Enter your email address" style={{ borderRadius: '15px' }} required/>
                        </div>
                        <div className="mb-3 text-start">
                            <label for="message" className="form-label" style={{ color: props.mode === 'dark' ? '#ffc007' : 'black', fontSize: '30px' }}><strong>Message</strong></label>
                            <textarea name="message" className="form-control" placeholder="Enter your message" style={{ height: '300px', borderRadius: '15px' }} required/>
                        </div>
                        <div className="mb-2 mt-5">
                            <button type="submit" className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'} mx-2`} style={{ width: '100px', borderRadius: '10px'}}><strong>Submit</strong></button>
                            <button type="reset" className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'} mx-2`} style={{ width: '100px', borderRadius: '10px' }}><strong>Reset</strong></button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;