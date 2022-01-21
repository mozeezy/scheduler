import React from "react";
import "components/Appointment/styles.scss";

function Appointment(props) {
  return <article className="appointment">
    {props.time ? `Appointment at ${props.time}` : "No Appointments"}
  </article>;
}

export default Appointment;
