export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.filter((oneDay) => oneDay.name === day);
  let appointments = [];

  if (selectedDay[0] && selectedDay[0].appointments) {
    appointments = selectedDay[0].appointments;
  }
  return appointments.map((id) => state.appointments[id]);
}

export function getInterview(state, interview) {
  if (!interview) return null;
  const { student, interviewer } = interview;
  return {
    student,
    interviewer: state.interviewers[interviewer],
  };
}
