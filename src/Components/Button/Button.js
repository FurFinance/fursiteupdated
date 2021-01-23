import React from "react";
import { Button } from 'ui-neumorphism'

import "./Button.scss";

//icons

const Buttons = ({ children, link }) => {
  return (
    <Button className="btnComponent" style={{color: "rgb(15, 224, 15)"}}>
      <a href={link} style={{color: "rgb(15, 224, 15)"}}>{children}</a>
    </Button>
  );
};

export default Buttons;
