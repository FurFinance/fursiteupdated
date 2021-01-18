import React from "react";

import { FaArrowRight } from "react-icons/fa";

import "../pagesStyle/Team.scss";

const Team = () => {
  return (
    <div className="background">
      <div data-aos="fade-up" style={{opacity: 1}}>
        <div className="teamSectionWrapper">
          <div className="titleParent">
            <h1>CORE TEAM</h1>
          </div>
          <div className="teamMembers">
            <ul>
              <li>
                <FaArrowRight />
                <span className="member">Attention Toshi</span>{" "}
                <span className="role"> / Ticket Inspector</span>
              </li>
<li>
                <FaArrowRight /> <span className="member">Eth0x</span>{" "}
                <span className="role"> / Engineer </span>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
