import React from 'react';
import {Link} from 'react-router-dom';
const Project = () => {
  return (
    <div className='container'>
        <h2 className='my-3'><b><strong>All Important You Tube Links for Projects Ideas</strong></b></h2>
        <div className="container ">
            <h3 className='mt-5 text-muted'><strong>Full-Stack development Project Ideas With You Tube Resource</strong></h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><Link to="https://lnkd.in/dxcZTAsn" target='_blank' rel="noreferrer">AMAZON Clone</Link></li>
                <li className="list-group-item"><Link to='https://lnkd.in/d4gubPzw' target='_blank' rel="noreferrer">Netflix Clone</Link></li>
                <li className="list-group-item"><Link to="https://lnkd.in/dN7CKY6P" target='_blank' rel="noreferrer">Whether Search</Link></li>
                <li className="list-group-item"><Link to="https://lnkd.in/dRP3gxGY" target='_blank' rel="noreferrer">Real-Time Chat App</Link></li>
                <li className="list-group-item">Ecommerce Website<Link className='mx-3' to='https://lnkd.in/dYfYNhxe' target='_blank' rel="noreferrer">Part 1</Link> <Link to='https://lnkd.in/dFvjc3_t' target='_blank' rel="noreferrer">Part 2</Link> <Link className='mx-3' to='https://lnkd.in/d9SgXd_n' target='_blank' rel="noreferrer">Part 3</Link></li>
                <li className="list-group-item"><Link to='https://lnkd.in/dA7bbVnh' target='_blank' rel="noreferrer">Portfolio Website</Link></li>
                <li className="list-group-item"><Link to='https://lnkd.in/d6G4aMSX' target='_blank' rel="noreferrer">Cryptocurrency Tracker</Link></li>
                <li className="list-group-item"></li>
            </ul>
        </div>
        <div className="container mb-5">
            <h3 className='mt-5 text-muted'><strong>Best Android Projects</strong></h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><Link to="https://lnkd.in/dHgZmYgQ" target='_blank' rel="noreferrer">Sticky Notes App</Link></li>
                <li className="list-group-item"><Link to='https://lnkd.in/dADxVHqB' target='_blank' rel="noreferrer">Face Filters App</Link></li>
                <li className="list-group-item"><Link to="https://lnkd.in/dJR4ArJa" target='_blank' rel="noreferrer">Facial Emotion Detection</Link></li>
                <li className="list-group-item"><Link to="https://lnkd.in/dREy-Mke" target='_blank' rel="noreferrer">Paint Application</Link></li>
                <li className="list-group-item"><Link to='https://lnkd.in/d9FrvcsB' target='_blank' rel="noreferrer">Bitcoin Tracker</Link></li>
                <li className="list-group-item"><Link to='https://lnkd.in/d8WFzs3d' target='_blank' rel="noreferrer">Xylophone Application</Link></li>
                <li className="list-group-item"></li>
            </ul>
        </div>
        <div className="container mb-5">
            <h3>For More Such Project Ideas And Guides on Multiple Domains</h3>
            <Link className='btn btn-primary my-3' to='https://projectlearn.io/' target='_blank' rel="noreferrer">Explore More</Link>
        </div>
    </div>
  );
}

export default Project;
