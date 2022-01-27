import React, { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = function () {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: [],
  });

  function bookInterview(appointmentId, interview) {
    console.log(appointmentId, interview);
    const appointment = {
      ...state.appointments[appointmentId],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [appointmentId]: appointment,
    };

    return axios
      .put(`/api/appointments/${appointmentId}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments,
          days: state.days.map((day) => updateSpots(appointments, day)),
        });
        updateSpots(appointments, appointment);
      });
  }

  const cancelInterview = (appointmentId) => {
    const appointment = {
      ...state.appointments[appointmentId],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [appointmentId]: appointment,
    };

    return axios.delete(`/api/appointments/${appointmentId}`).then(() => {
      setState({
        ...state,
        appointments,
        days: state.days.map((day) => updateSpots(appointments, day)),
      });
    });
  };

  const updateSpots = function (appointments, day) {
    const remainingSpots = day.appointments.length - day.appointments.map((appointmentId) => appointments[appointmentId].interview).filter((appointment) => appointment).length;
    day.spots = remainingSpots;
    return day;
  };

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((all) => {
        console.log(all);
        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        }));
      })
      .catch((err) => console.log("error", err));
  }, []);
  return { state, bookInterview, cancelInterview, setDay };
};

export default useApplicationData;
