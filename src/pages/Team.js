import React from "react";

import { FaArrowRight, FaRobot } from "react-icons/fa";
import arrow from '../images/arrow.png'

import "../pagesStyle/Team.scss";

const Team = () => {
  return (
    <div className="background">
      <div data-aos="fade-up" style={{ opacity: 1 }}>
        <div className="teamSectionWrapper">
          <div className="titleParent">
            <h1 style={{ color: 'pink', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'/* width and color */
 }}>CORE TEAM</h1>
          </div>
          <div className="teamMembers">
            <ul>
              <li>
                <img src={arrow} height='50' width='100' />
                <span className="member" style={{ color: 'snow', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black' }}>Attention Toshi</span>{" "}
      
                <span className="role" style={{ color: 'rgb(15 224 15)', fontFamily: 'system-ui', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}> / Ticket Inspector</span>
              </li>
              <li>
                <img src={arrow} height='50' width='100' /><span className="member" style={{ color: 'rgb(6 87 249)', border: 'snow', textShadow: '4px 4px orange', margin: '1rem', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black' }}>Eth0x</span>{" "}
      
                <span className="role" style={{ color: 'orange', fontFamily: 'system-ui', fontFamily: 'system-ui', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black' }}> / Engineer </span>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
