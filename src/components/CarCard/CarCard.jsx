import React from 'react';
import {Link} from 'react-router-dom';

function CarCard({car}) { 
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
          <dd>{car.color}</dd>
          <dt>CarYear</dt>
          <dd>{car.year}</dd>
          <dt>Car Odometere</dt>
          <dd>{car.odometer}</dd>
          {car.photo && <img alt="car" src={car.photo}/>}
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>Return To List</Link>
      </div>
    </div>
  );
}
export default CarCard;