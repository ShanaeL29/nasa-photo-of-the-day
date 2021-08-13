import React from "react";

import styled from "styled-components";

const StyledImage = styled.div`
  background-color: ${(pr) => pr.theme.secondaryColor};
  img {
    height: 20%;
    width: 60%;
  }
`;

function ImageOfTheDay(props) {
  // const { image } = props;

  return (
    <StyledImage className="dailyImage">
      <img src={props.image} alt="Nasa's visual of the day" />
    </StyledImage>
  );
}

export default ImageOfTheDay;
