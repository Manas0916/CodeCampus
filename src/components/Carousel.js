import React from "react";
import firstyear from './images/firstyear.gif'
import secondyear from './images/secondyear.png'
import thirdyear from  './images/thirdyear.png'
import fourthyear from './images/fourthyear.png'

const Carousel = () => {
  return (
    <div id="carouselExampleInterval" className=" container carousel slide my-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="active" aria-current="true" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" className="active" aria-current="true" aria-label="Slide 4"></button>
        </div>
        <div className="container carousel-inner my-3 mx-8">
            <div className="carousel-item active" data-bs-interval="1800">
            <img src={firstyear} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src={secondyear} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src={thirdyear} className="d-block w-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src={fourthyear} className="d-block w-100 " alt="..."/>
            </div>
        </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
