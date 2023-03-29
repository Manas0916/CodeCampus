import React from 'react';
import Card from './Card';
import Carousel from './Carousel';
import { useEffect } from 'react';


const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const handleLogOut = ()=>{
    localStorage.clear();
    window.location.reload();
  }


  return (
    <div>
      <Carousel mode={props.mode} />
      <Card mode={props.mode} toggleMode={props.toggleMode} />
      <button className='btn btn-primary my-4' onClick={handleLogOut}>LOGOUT</button>
    </div>
  );
}

export default Home;
