//delete carditem and make changes in card.js and make folders of images named as banner and cards.
import React from 'react';
import { Link } from "react-router-dom";

// import projroad from './images/Cards/projroad.jpg'
// import sbp from './images/Cards/sbp.png'
// import pbp from './images/Cards/pbp.png'
// import cv from './images/Cards/cv.png'
// import cpdsa from './images/Cards/cpdsa.png'
// import aptitude from './images/Cards/aptitude.png'

const Card = (props) => {
  return (
    <>
      <h1 className={`text-${props.mode === 'light'?'dark':'light'}`}>Latest Tutorials</h1>
      <div className="container my-5 text-centre">
        
        <div className="row my-2 mx-4 d-flex justify-content-center" >
          <div className="col-md-3 mx-3 my-2">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: props.mode==='dark'?'#5F6F81':'#eeeeef', borderRadius: '15px' }}>
              <div className="card-body">
                <h4 className="card-title" style={{color: props.mode==='dark'?'white':'black'}}>Project Ideas</h4>
                <p className="card-text my-5" style={{color: props.mode==='dark'?'white':'black'}}><strong>Stuck in project ideas? Take help with some interesting ideas!</strong></p>
                <div className="container my-5">
                  <Link to="/project" className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'}`}>Get Started &raquo;</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-3 my-2">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: props.mode==='dark'?'#5F6F81':'#eeeeef', borderRadius: '15px' }}>
              <div className="card-body">
                <h4 className="card-title" style={{color: props.mode==='dark'?'white':'black'}}>Service Based Company SDE Sheets</h4>
                <p className="card-text my-5" style={{color: props.mode==='dark'?'white':'black'}}><strong>Solve Most Asked Questions by Top Service Based Companies</strong></p>
                <div className="container my-5">
                  <Link to="/tcsnqtprep" className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'}`}>Get Started &raquo;</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mx-3 my-2">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: props.mode==='dark'?'#5F6F81':'#eeeeef', borderRadius: '15px' }}>
              <div className="card-body">
                <h4 className="card-title" style={{color: props.mode==='dark'?'white':'black'}}>Product Based Company SDE Sheets</h4>
                <p className="card-text my-5" style={{color: props.mode==='dark'?'white':'black'}}><strong>Solve Most Asked Questions by Top Product Based Companies (MAANG)</strong></p>
                <div className="container my-5">
                  <Link to="/ProductBasedPrep" className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'}`}>Get Started &raquo;</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-2 mx-4 d-flex justify-content-center" >
          <div className="col-md-3 mx-3 my-2">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: props.mode==='dark'?'#5F6F81':'#eeeeef', borderRadius: '15px' }}>
              <div className="card-body">
                <h4 className="card-title" style={{color: props.mode==='dark'?'white':'black'}}>Resume / CV Building</h4>
                <p className="card-text my-5" style={{color: props.mode==='dark'?'white':'black'}}><strong>Resume tips and Template that will help you get hired !</strong></p>
                <div className="container my-5">
                  <Link to="/resume" className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'}`}>Get Started &raquo;</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-3 my-2 ">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: props.mode==='dark'?'#5F6F81':'#eeeeef', borderRadius: '15px' }}>
              <div className="card-body">
                <h4 className="card-title" style={{color: props.mode==='dark'?'white':'black'}}>Competitive Programming / DSA Learning</h4>
                <p className="card-text my-3" style={{color: props.mode==='dark'?'white':'black'}}><strong>Prepare Data Structure concepts and Competitive Programming for Online Assessments / Interviews</strong></p>
                <div className="container my-5">
                  <Link to="/DsaCp"className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'}`}>Get Started &raquo;</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-3 my-2">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: props.mode==='dark'?'#5F6F81':'#eeeeef', borderRadius: '15px'}}>
              <div className="card-body">
                <h4 className="card-title" style={{color: props.mode==='dark'?'white':'black'}}>Aptitude Preparation / Reasoning</h4>
                <p className="card-text my-4" style={{color: props.mode==='dark'?'white':'black'}}><strong>Aptitude questions and answers for your placement interviews and competitive exams!</strong></p>
                <div className="container my-5">
                  <Link to="https://www.indiabix.com/" target="_blank" className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'}`}>Get Started &raquo;</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-2 mx-4 d-flex justify-content-center" >
          <div className="col-md-3 mx-3 my-2">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: props.mode==='dark'?'#5F6F81':'#eeeeef', borderRadius: '15px' }}>
              <div className="card-body">
                <h4 className="card-title" style={{color: props.mode==='dark'?'white':'black'}}>Machine Coding Round Questions (LLD)</h4>
                <p className="card-text my-5" style={{color: props.mode==='dark'?'white':'black'}}><strong>Prepare System design questions that are asked from Freshers</strong></p>
                <div className="container my-5">
                  <Link to="https://workat.tech/machine-coding/practice" className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'}`}>Get Started &raquo;</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-3 my-2 ">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: props.mode==='dark'?'#5F6F81':'#eeeeef', borderRadius: '15px' }}>
              <div className="card-body">
                <h4 className="card-title" style={{color: props.mode==='dark'?'white':'black'}}>Top Youtube Channels</h4>
                <p className="card-text my-5" style={{color: props.mode==='dark'?'white':'black'}}><strong>Learn exciting Tutorials from top Industry Experts / Youtubers</strong></p>
                <div className="container my-5">
                  <Link to="/youtube" className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'}`}>Get Started &raquo;</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-3 my-2">
            <div className="card" style={{ width: '20rem', height: '18rem', backgroundColor: props.mode==='dark'?'#5F6F81':'#eeeeef', borderRadius: '15px'}}>
              <div className="card-body">
                <h4 className="card-title" style={{color: props.mode==='dark'?'white':'black'}}>Top Telegram Channels</h4>
                <p className="card-text my-4" style={{color: props.mode==='dark'?'white':'black'}}><strong>Get Timely Updates for every Job opportunities and Coding contests</strong></p>
                <div className="container my-5">
                  <Link to="/telegram" className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'}`}>Get Started &raquo;</Link>
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

