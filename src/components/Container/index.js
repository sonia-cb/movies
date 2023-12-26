import React from "react";
import './styles.css';

const CenteredContainer = ({ children }) => {
  return (
    <div className="wrapper" >
      {children}
    </div>
  );
};

export default CenteredContainer;