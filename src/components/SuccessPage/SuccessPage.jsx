import React from 'react';
import {Link} from 'react-router-dom';

function SuccessPage({location}) {
  const car  = location.state.car
  return (
    <>
    <h1>Congratulation!</h1>
    <div className='panel panel-default'>
      <div className='panel-body-a'>
        <dl>
          <dt>Car Make</dt>
          <dd>{car.carMake}</dd>
          <hr></hr>
          <dt>Car Model</dt>
          <dd>{car.carModel}</dd>
          <hr></hr>
          <dt>Car Color</dt>
          <dd>{car.color}</dd>
          <hr></hr>
          <dt>CarYear</dt>
          <dd>{car.year}</dd>
          <hr></hr>
          <dt>Car Odometere</dt>
          <dd>{car.odometer}</dd>
          <hr></hr>
          <dt>Car Price</dt>
          <dd>{car.price}</dd>
          <hr></hr>
          {car.photo && <img alt="car" src={car.photo}/>}
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>Return To List</Link>
      </div>
    </div>
    </>
  );
}
export default SuccessPage;