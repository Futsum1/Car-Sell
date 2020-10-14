import React from 'react';
import {Link} from 'react-router-dom';

function PuppyCard({car}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{car.carMake}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Car Make</dt>
          <dd>{car.carMake}</dd>
          <dt>Car Model</dt>
          <dd>{car.carModel}</dd>
          <dt>Car Color</dt>
          <dd>{car.carColor}</dd>
          <dt>CarYear</dt>
          <dd>{car.year}</dd>
          <dt>Car Odometere</dt>
          <dd>{car.odometer}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}
export default PuppyCard;