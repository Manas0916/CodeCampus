import React from 'react';
import Carditem from './Carditem';

const Card = () => {
  return (
    <div className='row my-5 mx-5'>
            <div className="container col-md-3 mx-1"> <Carditem/></div>
            <div className="container col-md-3 mx-1" > <Carditem/></div>
            <div className="container col-md-3 mx-1"> <Carditem/></div>
    </div>
  );
}

export default Card;

