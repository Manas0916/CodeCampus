import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
const Project = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div className='container'>
        <div className="container mt-5 pt-5">
            <h2 className='my-3' style={{color: props.mode==='dark'?'white':'black'}}><b><strong>All Important You Tube Links for Projects Ideas</strong></b></h2>
        </div>
        <div className="container ">
            <h3 className={`mt-5 pb-3 ${props.mode==='dark'?'text-light':'text-muted'}`}><strong>Full-Stack development Project Ideas With You Tube Resource</strong></h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://lnkd.in/dxcZTAsn" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>AMAZON Clone</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to='https://lnkd.in/d4gubPzw' target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Netflix Clone</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://lnkd.in/dN7CKY6P" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Whether Search</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://lnkd.in/dRP3gxGY" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Real-Time Chat App</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white', color: props.mode==='dark'?'white':'black'}}>Ecommerce Website<Link className='mx-3' to='https://lnkd.in/dYfYNhxe' target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Part 1</Link> <Link to='https://lnkd.in/dFvjc3_t' target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Part 2</Link> <Link className='mx-3' to='https://lnkd.in/d9SgXd_n' target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Part 3</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to='https://lnkd.in/dA7bbVnh' target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Portfolio Website</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to='https://lnkd.in/d6G4aMSX' target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Cryptocurrency Tracker</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to='https://workat.tech/project-ideas' target='_blank' rel='nonreferrer' style={{color: props.mode==='dark'?'white':'#1d73e9'}}> Project Ideas for Software Developers </Link></li>
            </ul>
        </div>
        <div className="container mb-5">
            <h3 className={`mt-5 pb-3 ${props.mode==='dark'?'text-light':'text-muted'}`}><strong>Best Android Projects</strong></h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://lnkd.in/dHgZmYgQ" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Sticky Notes App</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to='https://lnkd.in/dADxVHqB' target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Face Filters App</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://lnkd.in/dJR4ArJa" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Facial Emotion Detection</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to="https://lnkd.in/dREy-Mke" target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Paint Application</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to='https://lnkd.in/d9FrvcsB' target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Bitcoin Tracker</Link></li>
                <li className="list-group-item" style={{borderRadius: '15px', backgroundColor: props.mode==='dark'?'#42424F':'white'}}><Link to='https://lnkd.in/d8WFzs3d' target='_blank' rel="noreferrer" style={{color: props.mode==='dark'?'white':'#1d73e9'}}>Xylophone Application</Link></li>
            </ul>
        </div>
        <div className="container mb-5">
            <h3 style={{color: props.mode==='dark'?'white':'black'}}>For More Such Project Ideas And Guides on Multiple Domains</h3>
            <Link className={`btn btn-${props.mode==='dark'?'warning':'primary'} my-3`} to='https://projectlearn.io/' target='_blank' rel="noreferrer" >Explore More &raquo;</Link>
        </div>
    </div>
  );
}

export default Project;
