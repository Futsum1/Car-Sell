import React from 'react';
import {Link} from 'react-router-dom';
import './CarListItem.css';
function CarListItem(props) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{props.car.carName}</h3>
      </div>
      <div className='panel-footer CarListItem-action-panel'>
      </div>
    </div>
  );
}
export default CarListItem;