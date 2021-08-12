import React from "react";

function Explanation(props) {
  const { explanation } = props;

  return (
    <div className="explanation">
      <p>{explanation}</p>
    </div>
  );
}

export default Explanation;
