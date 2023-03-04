//delete carditem and make changes in card.js and make folders of images named as banner and cards.
import React from 'react';
import one from './images/Cards/one.png'
import two from './images/Cards/two.png'
import three from './images/Cards/three.png'
import four from './images/Cards/four.png'
import five from './images/Cards/five.png'
import six from './images/Cards/six.png'
const Card = () => {
  return (
    <>
      <h1>Latest Tutorials</h1>
      <div className="conatiner my-3">
        <div className="row mx-3 my-5" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ borderRadius: '20px' }}>
              <a href="https://www.youtube.com/" rel="noreferrer" target="_blank"><img src={one} style={{ borderRadius: '20px' }} className="card-img-top" alt="hello" /></a>
            </div>
          </div>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ borderRadius: '20px' }}>
              <a href="https://www.google.com/" rel="noreferrer" target="_blank"><img src={two} style={{ borderRadius: '20px' }} className="card-img-top" alt="hello" /></a>
            </div>
          </div>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ borderRadius: '20px' }}>
              <a href="https://www.google.com/" rel="noreferrer" target="_blank"><img src={three} style={{ borderRadius: '20px' }} className="card-img-top" alt="hello" /></a>
            </div>
          </div>
        </div>
        <div className="row mx-3 my-5" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ borderRadius: '20px' }}>
              <a href="https://www.google.com/" rel="noreferrer" target="_blank"><img src={four} style={{ borderRadius: '20px' }} className="card-img-top" alt="hello" /></a>
            </div>
          </div>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ borderRadius: '20px' }}>
              <a href="https://www.google.com/" rel="noreferrer" target="_blank"><img src={five} style={{ borderRadius: '20px' }} className="card-img-top" alt="hello" /></a>
            </div>
          </div>
          <div className="col-md-3 mx-3">
            <div className="card" style={{ borderRadius: '20px' }}>
              <a href="https://www.google.com/" rel="noreferrer" target="_blank"><img src={six} style={{ borderRadius: '20px' }} className="card-img-top" alt="hello" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

