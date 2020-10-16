import React from "react";
import "./CarListPage.css";
import CarListItem from "../CarListItem/CarListItem";

function CarListPage(props) {
  return (
    <>
      {/* <h1> Rent Car List</h1> */}
      <div className="CarListPage-grid">
        {props.cars.map(car => (
         <CarListItem 
         car={car} 
         key={car._id} 
         handleDeleteCar={props.handleDeleteCar}
         />
        ))}
      </div>
    </>
  );
}
export default CarListPage;