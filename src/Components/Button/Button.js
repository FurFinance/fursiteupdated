import React from "react";
import { Button } from 'ui-neumorphism'

import "./Button.scss";

//icons

const Buttons = ({ children, link }) => {
  return (
    <Button className="btnComponent">
      <a href={link}>{children}</a>
    </Button>
  );
};

export default Buttons;
