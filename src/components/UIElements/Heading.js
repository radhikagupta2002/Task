import React, { useState } from "react";
import "./Heading.css";

const Heading = (props) => {
  const [btnState, setBtnState] = useState(false);
  return (
    <div className="about-heading">
      <h4>{props.Label}</h4>
      <button
        type="button"
        onClick={() => props.submitHandler(btnState, setBtnState)}
        className="aboutme-btn"
      >
        {btnState ? props.onTrue : props.onFalse}
      </button>
    </div>
  );
};

export default Heading;
