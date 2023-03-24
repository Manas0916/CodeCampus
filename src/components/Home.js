import React from 'react';
import Card from './Card';
import Carousel from './Carousel';
import { useEffect } from 'react';


const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Carousel mode={props.mode} />
      <Card mode={props.mode} toggleMode={props.toggleMode} />
    </div>
  );
}

export default Home;
