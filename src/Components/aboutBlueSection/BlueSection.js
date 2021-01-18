import React from "react";

import "../aboutBlueSection/BlueSectionStyle.scss";

//import for hover effects
import AOS from "aos";
import "aos/dist/aos.css";

const BlueSection = () => {
  return (
    <>
      <div data-aos="zoom-in">
        <div className="blueSectionWrapper">
          <div className="blueSectionContentWrapper">
          </div>
        </div>
      </div>
    </>
  );
};

export default BlueSection;