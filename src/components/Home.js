import React from 'react';
import Card from './Card';
import Carousel from './Carousel';


const Home = (props) => {
  return (
    <div>
      <Carousel mode = {props.mode}/>
      <Card mode = {props.mode} toggleMode={props.toggleMode}/>
    </div>
  );
}

export default Home;
