import React from "react";
import "./LogoSlider.css";
import RecruitmentProcess from "./Recruit";


// Logo image imports
const logos = [
  require("../Images/Logo/Ayutree.png"),
  require("../Images/Logo/flipkart-logo.png"),
  require("../Images/Logo/Meesho_logo.png"),
  require("../Images/Logo/pickyourtrail.png"),
  require("../Images/Logo/root.png"),
  require("../Images/Logo/7media.png"),
  require("../Images/Logo/krishna.png"),
];

const LogoSlider = () => {
  return (
    <>
      <div className="logo-slider-wrapper">
        <h2 className="logo-slider-title text-center mb-4">Our Happy Clients</h2>

        <div className="logo-slider">
          {/* Duplicate logos array for infinite effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div className="logo-slide" key={index}>
              <img src={logo} alt={`client-logo-${index}`} />
            </div>
          ))}
        </div>
      </div>

      <RecruitmentProcess />
    </>
  );
};

export default LogoSlider;
