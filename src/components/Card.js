//delete carditem and make changes in card.js and make folders of images named as banner and cards.
import React from 'react';
import { Link } from "react-router-dom";

// import projroad from './images/Cards/projroad.jpg'
// import sbp from './images/Cards/sbp.png'
// import pbp from './images/Cards/pbp.png'
// import cv from './images/Cards/cv.png'
// import cpdsa from './images/Cards/cpdsa.png'
// import aptitude from './images/Cards/aptitude.png'

const Card = () => {
  return (
    <>
      <h1 >Latest Tutorials</h1>
      <div className="container ms-5 me-5 my-5 justify-content-center">

        <div className="row my-2 mx-4 d-flex justify-content-center" >
          <div className="col-md-3 mx-3 my-2">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: '#eeeeef' }}>
              <div className="card-body">
                <h4 className="card-title" sytle={{backgroundColor: '#74ad60'}}>Project Ideas</h4>
                <p className="card-text my-5"><strong>Stuck in project ideas? Take help with some interesting ideas!</strong></p>
                <div className="container my-5">
                  <Link to="/project" className="btn btn-outline-primary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mx-3 my-2">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: '#eeeeef' }}>
              <div className="card-body">
                <h4 className="card-title" sytle={{backgroundColor: '#74ad60'}}>Service Based Preparation</h4>
                <p className="card-text my-5"><strong>Stuck in project ideas? Take help with some interesting ideas!</strong></p>
                <div className="container my-5">
                  <Link to="/" target="_blank" className="btn btn-outline-primary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mx-3 my-2">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: '#eeeeef' }}>
              <div className="card-body">
                <h4 className="card-title" sytle={{backgroundColor: '#74ad60'}}>Product Based Preparation</h4>
                <p className="card-text my-5"><strong>Stuck in project ideas? Take help with some interesting ideas!</strong></p>
                <div className="container my-5">
                  <Link to="/" target="_blank" className="btn btn-outline-primary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row my-2 mx-4 d-flex justify-content-center" >
          <div className="col-md-3 mx-3 my-2">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: '#eeeeef' }}>
              <div className="card-body">
                <h4 className="card-title" sytle={{backgroundColor: '#74ad60'}}>Resume / CV Building</h4>
                <p className="card-text my-5"><strong>Stuck in project ideas? Take help with some interesting ideas!</strong></p>
                <div className="container my-5">
                  <Link to="/resume" className="btn btn-outline-primary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mx-3 my-2 ">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: '#eeeeef' }}>
              <div className="card-body">
                <h4 className="card-title" sytle={{backgroundColor: '#74ad60'}}>Competitive Programming / DSA Learning</h4>
                <p className="card-text my-5"><strong>Stuck in project ideas? Take help with some interesting ideas!</strong></p>
                <div className="container my-5">
                  <Link to="/" target="_blank" className="btn btn-outline-primary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mx-3 my-2">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: '#eeeeef' }}>
              <div className="card-body">
                <h4 className="card-title">Aptitude Preparation / Reasoning</h4>
                <p className="card-text my-4"><strong>Aptitude questions and answers for your placement interviews and competitive exams!</strong></p>
                <div className="container my-5">
                  <Link to="https://www.indiabix.com/" target="_blank" className="btn btn-outline-primary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Card;

