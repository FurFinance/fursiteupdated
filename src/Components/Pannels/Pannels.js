import React, { Component } from "react";

import {
  BsFillShieldFill,
  BsFillPeopleFill,
  BsGraphDown,
  BsBarChartFill,
} from "react-icons/bs";

//import styleing
import "./PannelsStyle.scss";

class Pannels extends Component {
  state = {
    panneldData: [
      {
        
        title: "",
        text:
          "",
        id: 1,
      },
      {
        title: "",
        text:
          "",
        id: 3,
      },
      {
        title: "",
        text:
          "",
        id: 2,
      },
    ],
  };

  render() {
    return (
      <>
        <div className="pannelParrent">
          {this.state.panneldData.map((item) => (
            <div key={item.id} className="pannel">
              <h2>{item.icon}</h2>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Pannels;
