import React from 'react';
import { Link } from 'react-router-dom';
import "./CarCard.css";

function CarCard({ car }) {
    return (
        <div className="panel-heading">
            <h3 className='panel-title' style={{ textAlign: 'center', backgroundColor: 'black', color: 'whitesmoke' }}>{car.carMake}</h3>
            <div className='panel panel-default'>


                <div class="card2decs">
                </div>
                <div class="bg">
                    <div class="row mainRow">
                        <div class="col-sm-4">
                            <div >

                                <div class="view view-cascade overlay text-center">
                                    {car.photo && <img src={car.photo} class="card-img-top" alt="" style={{ width: '640px', height: '400px' }} />}
                                </div>

                                <div class="desc">

                                    <div class="row subRow">
                                        <div class="col">
                                            <p class="text-muted row1"> Brand Year</p>
                                            <p class="row2">{car.year}</p>
                                            <hr></hr>
                                        </div>

                                        <div class="col">
                                            <p class="text-muted row1">Milage</p>
                                            <p class="row2">{car.odometer} KM</p>
                                            <hr />
                                        </div>

                                        <div class="col">
                                            <p class="text-muted row1">Transmission</p>
                                            <p class="row2">{car.transmission}</p>
                                            <hr />
                                        </div>

                                        <div class="col">
                                            <p class="text-muted row1">Fuel Efficincy</p>
                                            <p class="row2">L/{car.fuel}Mile*</p>
                                            <hr />
                                        </div>

                                        <div class="col">
                                            <p class="text-muted row1">Car Door</p>
                                            <p class="row2">{car.door} Doors</p>
                                            <hr />
                                        </div>

                                    </div>


                                    <div class="row subRow">
                                        <div class="col">
                                            <p class="text-muted row1">Drive Unit</p>
                                            <p class="row2">{car.drive}</p>
                                            <hr />
                                        </div>

                                        <div class="col">
                                            <p class="text-muted row1">Body</p>
                                            <p class="row2">{car.body}</p>
                                            <hr />
                                        </div>

                                        <div class="col">
                                            <p class="text-muted row1">Color</p>
                                            <p class="row2">{car.color}</p>
                                            <hr />
                                        </div>

                                        <div class="col">
                                            <p class="text-muted row1">City/Hwy</p>
                                            <p class="row2"># {car.city}</p>
                                            <hr />
                                        </div>
                                        <div class="col">
                                            <p class="text-muted row1">Daily UI</p>
                                            <p class="row2"># {car.daily}</p>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='panel-footer'>
                <Link to={{ pathname: '/checkout', state: { car: car } }} >Buy this car</Link>
                <Link to='/'>Return To List</Link>
            </div>
        </div>
    );
}
export default CarCard;