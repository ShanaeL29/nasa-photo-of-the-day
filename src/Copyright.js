import React from "react";

function Copyright({ copyright, error }) {
  // function Copyright(props) {
  // const { image } = props;

  //   {props.error !== "" ? null : <p>Copyright: {props.copyright}</p>} this is what was inside JSX
  //doing it the currently displayed way makes it so that when an error is logged it does not also log the copyright hard coded text
  return (
    <div className="copyright">
      {error !== "" ? null : <p>Copyright: {copyright}</p>}
    </div>
  );
}

export default Copyright;
