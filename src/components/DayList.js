import React from "react";
import DayListItem from "./DayListItem";



function DayList(props) {
  const mappedDaysArray = props.days.map((day) => {
    return (
      <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.value}
      setDay={props.onChange}
       />
    )
  })
  return(
    <ul>{mappedDaysArray}</ul>
  )
}

export default DayList;
