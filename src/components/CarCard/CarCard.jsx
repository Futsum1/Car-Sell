import React from 'react';
import {Link} from 'react-router-dom';

function CarCard({car}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{car.carMake}</h3>
      </div>
      <div className='panel-body'>
      <ul class="list-group">
          <li>Car Make</li>
          <dd>{car.carMake}</dd>
          <li>Car Model</li>
          <dd>{car.carModel}</dd>
          <li>Car Color</li>
          <dd>{car.color}</dd>
          <li>CarYear</li>
          <dd>{car.year}</dd>
          <li>Car Odometere</li>
          <dd>{car.odometer}</dd>
          <li>Car Price</li>
          <dd>${car.price}</dd>
          {car.photo && <img alt="car" src={car.photo}/>}
          </ul>
      </div>
      <div className='panel-footer'>
        <Link to={{pathname: '/checkout', state: {car: car}}}>Buy this car</Link>
        <Link to='/'>Return To List</Link>
      </div>
    </div>
  );
}
export default CarCard;