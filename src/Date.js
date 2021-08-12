import React from "react";

function Date({ date }) {
  //give me the prop named date from props (in app.js) ..... we specify the date prop here
  // const { date } = props;. Instead of saying give me date which comes from props^^^

  return (
    <div className="date">
      <h2>{date}</h2>
    </div>
  );
}

export default Date;
