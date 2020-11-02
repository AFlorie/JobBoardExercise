/* Components/Job.js */

import React from "react";

const Job = (props) => {
  return (
    <article className={props.borderColor}>
      <div>{props.title}</div>
      <div>{props.info}</div>
    </article>
  );
};

export default Job;
