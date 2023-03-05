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
      <h1>Latest Tutorials</h1>
      <div className="conatiner my-3">
        <div className="row mx-3 my-5" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ width: '25rem', height: '18rem', backgroundColor: '#eeeeef' }}>
              <div className="card-body">
                <h4 className="card-title" sytle={{backgroundColor: '#74ad60'}}>Project Ideas</h4>
                <p className="card-text my-5"><strong>Stuck in project ideas? Take help with some interesting ideas!</strong></p>
                <div className="container my-5">
                  <Link to="/" target="_blank" class="btn btn-outline-primary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ width: '25rem', height: '18rem', backgroundColor: '#eeeeef' }}>
              <div className="card-body">
                <h4 className="card-title" sytle={{backgroundColor: '#74ad60'}}>Service Based Preparation</h4>
                <p className="card-text my-5"><strong>Stuck in project ideas? Take help with some interesting ideas!</strong></p>
                <div className="container my-5">
                  <Link to="/" target="_blank" class="btn btn-outline-primary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ width: '25rem', height: '18rem', backgroundColor: '#eeeeef' }}>
              <div className="card-body">
                <h4 className="card-title" sytle={{backgroundColor: '#74ad60'}}>Product Based Preparation</h4>
                <p className="card-text my-5"><strong>Stuck in project ideas? Take help with some interesting ideas!</strong></p>
                <div className="container my-5">
                  <Link to="/" target="_blank" class="btn btn-outline-primary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-3 my-5" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ width: '25rem', height: '18rem', backgroundColor: '#eeeeef' }}>
              <div className="card-body">
                <h4 className="card-title" sytle={{backgroundColor: '#74ad60'}}>Resume / CV Building</h4>
                <p className="card-text my-5"><strong>Stuck in project ideas? Take help with some interesting ideas!</strong></p>
                <div className="container my-5">
                  <Link to="/" target="_blank" class="btn btn-outline-primary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ width: '25rem', height: '18rem', backgroundColor: '#eeeeef' }}>
              <div className="card-body">
                <h4 className="card-title" sytle={{backgroundColor: '#74ad60'}}>Competitive Programming / DSA Learning</h4>
                <p className="card-text my-5"><strong>Stuck in project ideas? Take help with some interesting ideas!</strong></p>
                <div className="container my-5">
                  <Link to="/" target="_blank" class="btn btn-outline-primary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ width: '25rem', height: '18rem', backgroundColor: '#eeeeef' }}>
              <div className="card-body">
                <h4 className="card-title">Aptitude Preparation</h4>
                <p className="card-text my-5"><strong>Stuck in project ideas? Take help with some interesting ideas!</strong></p>
                <div className="container my-5">
                  <Link to="https://www.indiabix.com/" target="_blank" class="btn btn-outline-primary">Get Started</Link>
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

