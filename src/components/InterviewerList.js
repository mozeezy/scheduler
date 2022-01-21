import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

function InterviewerList(props) {
  const mappedInterviewers = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        {...interviewer}
        key={interviewer.id}
        setInterviewer={props.setInterviewer}
        selected={interviewer.id === props.interviewer}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{mappedInterviewers}</ul>
    </section>
  );
}

export default InterviewerList;
