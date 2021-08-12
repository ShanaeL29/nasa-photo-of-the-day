import React from "react";

function ImageOfTheDay(props) {
  // const { image } = props;

  return (
    <div className="dailyImage">
      <img src={props.image} alt="Nasa's visual of the day" />
    </div>
  );
}

export default ImageOfTheDay;
