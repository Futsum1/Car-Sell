import React from 'react';
// import {Link} from 'react-router-dom';
import './CarListItem.css';
import { Link } from 'react-router-dom'

function CarListItem(props) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
      {/* <img src="https://t3.ftcdn.net/jpg/03/64/81/50/240_F_364815013_RPvMWCJhPDRI8zfptrf3nMTe1O4iYvSq.jpg" class="card-img-top" alt="..."/> */}
      
        <h3 className='panel-title'>{props.car.carMake}</h3>
        <h3 className='panel-title'>{props.car.carModel}</h3>
      </div>
      <div className='panel-footer CarListItem-action-panel'>
      <Link
      className='btn btn-xs btn-info'
       to={{
         pathname: '/details',
        state: {car: props.car}
       }}
        >
        DETAILS
       </Link>
       <Link
      className='btn btn-xs btn-warning'
      to={{
      pathname: '/edit',
      state: {car: props.car}
      }}
       >
      EDIT
      </Link>
      <button
        className="btn btn-xs btn-danger margin-left-10"
        onClick={() => props.handleDeleteCar(props.car._id)}
       >
        DELETE
        </button>
      </div>
    </div>
  );
}
export default CarListItem;