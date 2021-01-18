import React from "react";

import "./Button.scss";

//icons

const Button = ({ children, link }) => {
  return (
    <div className="btnComponent">
      <a href={link}>{children}</a>
    </div>
  );
};

export default Button;
