import React from "react";
import CarCard from "../../components/CarCard/CarCard";

function CarDetailPage(props) {
  
  const car = props.location.state.car;
  return (
    <>
      <h1>Car Details</h1>
      <CarCard key={car._id} car={car} />
    </>
  );
}

export default CarDetailPage;