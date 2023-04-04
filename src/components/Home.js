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
      <button className={`my-2 mb-5 btn btn-outline-${props.mode==='dark'?'warning':'primary'}`} onClick={handleLogOut}>LOGOUT</button>
    </div>
  );
}

export default Home;
