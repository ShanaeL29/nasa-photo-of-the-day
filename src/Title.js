import React from "react";

function Title(props) {
  const { title } = props;

  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
}

export default Title;
