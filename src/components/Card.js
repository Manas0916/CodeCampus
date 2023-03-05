//delete carditem and make changes in card.js and make folders of images named as banner and cards.
import React from 'react';
import { Link } from "react-router-dom";

import projroad from './images/Cards/projroad.jpg'
import sbp from './images/Cards/sbp.png'
import pbp from './images/Cards/pbp.png'
import cv from './images/Cards/cv.png'
import cpdsa from './images/Cards/cpdsa.png'
import aptitude from './images/Cards/aptitude.png'

const Card = () => {
  return (
    <>
      <h1>Latest Tutorials</h1>
      <div className="conatiner my-3">
        <div className="row mx-3 my-5" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ borderRadius: '20px' }}>
              <img src={projroad} style={{ height: '400px', borderRadius: '20px' }} className="card-img-top" alt="hello" />
              <div class="card-body" style={{ backgroundColor: 'green', borderRadius: '20px' }}>
                <h1 class="card-title" style={{ color: 'red', backgroundColor: 'yellow', borderRadius: '20px' }}>Project Ideas and Roadmap</h1>
                <Link to="/" class="btn btn-primary">Get Started</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ borderRadius: '20px' }}>
              <img src={sbp} style={{ height: '400px', borderRadius: '20px' }} className="card-img-top" alt="hello" />
              <div class="card-body" style={{ backgroundColor: 'green', borderRadius: '20px' }}>
                <h1 class="card-title" style={{ color: 'red', backgroundColor: 'yellow', borderRadius: '20px' }}>Service Based Preparation</h1>
                <Link to="/" class="btn btn-primary">Get Started</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ borderRadius: '20px' }}>
              <img src={pbp} style={{ height: '400px', borderRadius: '20px' }} className="card-img-top" alt="hello" />
              <div class="card-body" style={{ backgroundColor: 'green', borderRadius: '20px' }}>
                <h1 class="card-title" style={{ color: 'red', backgroundColor: 'yellow', borderRadius: '20px' }}>Product Based Preparation</h1>
                <Link to="/" class="btn btn-primary">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-3 my-5" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="col-md-3 mx-3">
            <div className="card" style={{ borderRadius: '20px' }}>
              <img src={cv} style={{ height: '400px', borderRadius: '20px' }} className="card-img-top" alt="hello" />
              <div class="card-body" style={{ backgroundColor: 'green', borderRadius: '20px' }}>
                <h1 class="card-title" style={{ color: 'red', backgroundColor: 'yellow', borderRadius: '20px' }}>Resume / CV Building</h1>
                <Link to="/" class="btn btn-primary">Get Started</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ borderRadius: '20px', height: '530px' }}>
              <img src={cpdsa} style={{ height: '400px', borderRadius: '20px' }} className="card-img-top" alt="hello" />
              <div class="card-body" style={{ backgroundColor: 'green', borderRadius: '20px', height: '20px'}}>
                <h1 class="card-title" style={{ color: 'red', backgroundColor: 'yellow', borderRadius: '20px', fontSize: '27px', height: '50px' }}>Competitive Programming / DSA Learning</h1>
                <Link to="/" class="btn btn-primary">Get Started</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ borderRadius: '20px' }}>
              <img src={aptitude} style={{ height: '400px', borderRadius: '20px' }} className="card-img-top" alt="hello" />
              <div class="card-body" style={{ backgroundColor: 'green', borderRadius: '20px' }}>
                <h1 class="card-title" style={{ color: 'red', backgroundColor: 'yellow', borderRadius: '20px' }}>Aptitude Preparation</h1>
                <Link to="https://www.indiabix.com/" class="btn btn-primary">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

