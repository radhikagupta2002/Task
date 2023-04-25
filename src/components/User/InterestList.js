import React from "react";

const InterestList = (props) => {
console.log(props.selectedOptions);
  return (
    <div className="interests-list">
      {props.selectedOptions.map((option) => (
        <div key={option} className="interest-badge">
          {option}
        </div>
      ))}
    </div>
  );
};

export default InterestList;
