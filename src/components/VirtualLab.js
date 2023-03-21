import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const VirtualLab = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className='container my-5'>
                <div className='container my-5 p-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h1 className='my-5'><strong>Laboratory Tutorials</strong></h1>
                </div>
                <br />
                <div className='container'>
                    <div className='container my-3 mb-3 text-start'>
                        <h2 style={{ color: props.mode === 'dark' ? 'white' : 'red' }}>First Year</h2>
                        <br />
                        <ul className="list-group">
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For PPS Lab</b> :- <Link to="https://youtube.com/playlist?list=PL-JvKqQx2AteR-PykKOm8rHuz5o8jf5nY" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                        </ul>
                    </div>
                    <br />
                    <div className='container my-3 text-start'>
                        <h2 style={{ color: props.mode === 'dark' ? 'white' : 'red' }}>Second Year</h2>
                        <br />
                        <ul className="list-group">
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For COA Lab</b>  :- <Link to="https://youtube.com/playlist?list=PLeV1aO80bdi7Zuce2uudw4327dQ71VTXw" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For DS Lab</b>  :- <Link to="https://youtube.com/playlist?list=PLpqGPi6G3Jf31PQCwxxq3LbIyRI1JNhzM" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For DSTL Lab</b>   :- <Link to="" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For MICROPROCESSOR Lab</b>  :- <Link to="https://youtu.be/GsPxk6GYf2Y" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For OS Lab</b>  :- <Link to="https://youtube.com/playlist?list=PLlr7wO747mNp5nn0hteJFnt1rpdx6GG-_" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For PYTHON PROGRAMMING Lab</b>   :- <Link to="https://youtube.com/playlist?list=PLGTaKwAVxdJFAddLmT-yDyN5dDdMGkJUu" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                        </ul>
                    </div>
                    <br />
                    <div className='container my-3 text-start'>
                        <h2 style={{ color: props.mode === 'dark' ? 'white' : 'red' }}>Third Year</h2>
                        <br />
                        <ul className="list-group">
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For CD Lab</b>  :- <Link to="https://youtube.com/playlist?list=PLSQzU2GdS6gfdaDjSC_Ol0s5Kj-P1mWZi" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For CN Lab</b>  :- <Link to="https://youtube.com/playlist?list=PLTwXRHDoo-A-Zn0y1XdH0NCCJ8YzTtq-u" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For DATA ANALYTICS Lab</b>  :- <Link to="https://youtu.be/6NO87npD7zk" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For DBMS Lab</b>  :- <Link to="https://youtube.com/playlist?list=PLUhzUGU9G_1sXjCDdjxlt8uFrHovolYcA" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For SE Lab</b>  :- <Link to="" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For WT Lab</b>  :- <Link to="https://youtube.com/playlist?list=PLX0o88X01t3vX06IO6llakXT-iRG7J2Gk" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                        </ul>
                    </div>
                    <br />
                    <div className='container mb-5 text-start'>
                        <h2 style={{ color: props.mode === 'dark' ? 'white' : 'red' }}>Fourth Year</h2>
                        <br />
                        <ul className="list-group">
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For ARTIFICIAL INTELLIGENCE Lab</b>  :- <Link to="https://youtube.com/playlist?list=PLSQzU2GdS6gfdaDjSC_Ol0s5Kj-P1mWZi" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                            <li className="list-group-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'dark' ? 'red' : 'black' }}><b>For DISTRIBUTED SYSTEMS Lab</b>  :- <Link to="https://youtube.com/playlist?list=PLTwXRHDoo-A-Zn0y1XdH0NCCJ8YzTtq-u" target='_blank' rel="noreferrer" style={{ color: props.mode === 'dark' ? 'black' : '#669cd9' }}>Click Here</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default VirtualLab;