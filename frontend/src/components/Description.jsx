import React from "react";
import closeIcon from "../images/close-icon.png";
function Description({ setShowDescription, description }) {
  return (
    <>
      <div className="description">
        <h4>Description</h4>
        <p>{description}</p>
        <button
          onClick={() => {
            setShowDescription(false);
          }}
        >
          <img src={closeIcon} alt="" />
        </button>
      </div>
      <div className="outer"></div>
    </>
  );
}

export default Description;
