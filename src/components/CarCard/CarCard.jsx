import React from 'react';
import {Link} from 'react-router-dom';

function CarCard({car}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{car.carMake}</h3>
      </div>
      <div className='panel-body'>
      {/* <ul class="list-group"> */}
          <ol>Car Make</ol>
          <dd>{car.carMake}</dd>
          <hr></hr>
          <ol>Car Model</ol>
          <dd>{car.carModel}</dd>
          <hr></hr>
          <ol>Car Color</ol>
          <dd>{car.color}</dd>
          <hr></hr>
          <ol>CarYear</ol>
          <dd>{car.year}</dd>
          <hr></hr>
          <ol>Car Odometere</ol>
          <dd>{car.odometer}</dd>
          <hr></hr>
          <ol>Car Price</ol>
          <dd>${car.price}</dd>
          {car.photo && <img alt="car" src={car.photo}/>}
          {/* </ul> */}
      </div>
      <div className='panel-footer'>
        <Link to={{pathname: '/checkout', state: {car: car}}}>Buy this car</Link>
        <Link to='/'>Return To List</Link>
      </div>
    </div>
  );
}
export default CarCard;