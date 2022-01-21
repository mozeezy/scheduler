import React from "react";
import classNames from "classnames";
import 'components/InterviewerListItem.scss'

function InterviewerListItem(props) {


  let interviewerClass = classNames("interviewers__item", {
    'interviewers__item--selected': props.selected
  })

  return (
    <li onClick={() => props.setInterviewer(props.id)} className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}

export default InterviewerListItem;
