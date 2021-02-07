import React from "react";
import "./CarListItem.css";
import { Link } from "react-router-dom";

function CarListItem(props) {
  return (

    <div className="panel panel-default">
      {props.car.photo && <img src={props.car.photo} class="img-thumbnail" alt="Cinque Terre" style={{ width: '450px', height: '240px' }} />}

      <div className="panel-heading">

        <div class="card-body pt-0 px-0"></div>
        <div class="d-flex flex-row justify-content-between mb-0 px-3">
          <em style={{ textAlign: 'center' }} className="panel-title">{props.car.carMake}</em>
          <small class="text-muted mt-1">STARTING AT</small>
          <em style={{ fontFamily: '-moz-initial' }}>$ {props.car.price}*</em>

        </div>
        <hr class="mt-2 mx-3" />
        <div class="d-flex flex-row justify-content-between px-3 pb-4">
          <div class="d-flex flex-column"><span class="text-muted">Fuel Efficiency</span><small class="text-muted">L/({props.car.fuel})KM</small></div>
          <div class="d-flex flex-column">
            <h5 class="mb-0">({props.car.city})</h5><small class="text-muted text-right">(city/Hwy)</small>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-between p-3 mid">
          <div class="d-flex flex-column"><small class="text-muted mb-1">ENGINE</small>
            <div class="d-flex flex-row"><img class="img-logo-a" src="https://imgur.com/iPtsG7I.png" alt=" " />
              <div class="d-flex flex-column ml-1"><small class="ghj">1.4L MultiAir</small><small class="ghj">16V I-4 Turbo</small></div>
            </div>
          </div>
          <div class="d-flex flex-column"><small class="text-muted mb-2">HORSEPOWER</small>
            <div class="d-flex flex-row"><img class="img-logo-b" src="https://imgur.com/J11mEBq.png" alt=" " />
              <h6 class="ml-1">135 hp*</h6>
            </div>
          </div>
        </div>
        <small class="text-muted key pl-3">Standard key Features</small>

        <div class="mx-1 mt-3 mb-2">
          <Link to={{
            pathname: "/checkout",
            state: { car: props.car },
          }}
          >
            <button type="submit" class="btn btn-primary btn-block">
              <small class='build'>BUILD  PRICE</small></button>
          </Link>
        </div>
        <small class="d-flex justify-content-center text-muted">*Legal Disclaimer</small>

      </div>
      <div className="panel-footer CarListItem-action-panel">
        <Link
          className="btn btn-xs btn-info"
          to={{
            pathname: "/details",
            state: { car: props.car },
          }}
        >
          DETAILS
        </Link>

        {props.isAdmin && (
          <Link
            className="btn btn-xs btn-warning"
            to={{
              pathname: "/edit",
              state: { car: props.car },
            }}
          >
            EDIT
          </Link>
        )}

        {props.isAdmin && (
          <button
            className="btn btn-xs btn-danger margin-left-10"
            onClick={() => props.handleDeleteCar(props.car._id)}
          >
            DELETE
          </button>
        )}
      </div>
    </div>
  );
}
export default CarListItem;
