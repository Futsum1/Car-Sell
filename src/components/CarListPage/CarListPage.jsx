import React from "react";
import "./CarListPage.css";
import CarListItem from "../CarListItem/CarListItem";

function CarListPage(props) {
  return (
    <>
      <div className="CarListPage-grid">
        {props.cars.map(car => (
          <CarListItem
            car={car}
            key={car._id}
            isAdmin={props.user.isAdmin}
            handleDeleteCar={props.handleDeleteCar}
          />
        ))}
      </div>
    </>
  );
}
export default CarListPage;