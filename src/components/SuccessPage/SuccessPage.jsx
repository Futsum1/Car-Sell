import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage({ location }) {
  const car = location.state.car
  return (
    <>

      <div className='panel panel-default'>

        <div className='panel-body-a'>
          <h1 style={{ background: 'black', color: 'white' }}>Congratulation!</h1>

          {car.photo && <img src={car.photo} class="img-thumbnail" alt="Cinque Terre" style={{ width: '649px', height: '350px' }} />}


          <div class="container">
            <h2>Manufacturer's Warranty</h2>
            <p>Clean Auto History This vehicle has a clean history and is free of accidents as reported by CARFAX</p>
            <small>Every vehicle undergoes thorough safety and mechanical inspections, ensuring everything from the suspension to the brake system is at, or above, state requirements. We only sell vehicles that have an accident-free CARFAX vehicle history report at the time of sale.:</small>
            <hr />
            <table class="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Car Make</th>
                  <th>Car Model</th>
                  <th>Color</th>
                  <th>Brand Year</th>
                  <th>Milage</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{car.carMake}</td>
                  <td>{car.carModel}</td>
                  <td>{car.color}</td>
                  <td>{car.year}</td>
                  <td>{car.odometer}</td>
                  <td>$ {car.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='panel-footer'>
          <Link to='/'>Return To List</Link>
        </div>
      </div>
    </>
  );
}
export default SuccessPage;