import React from "react";

import styled from "styled-components";

const StyledTitle = styled.div`
  background-color: ${(pr) => pr.theme.primaryColor};
  // h1 {
  //   color: ${(pr) => pr.theme.tertiaryColor};
  // }
`;

function Title(props) {
  const { title } = props;

  return <StyledTitle className="title">{title}</StyledTitle>;
}

export default Title;
