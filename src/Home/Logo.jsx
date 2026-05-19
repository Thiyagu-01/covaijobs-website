import React from "react";
import "./LogoSlider.css";
import RecruitmentProcess from "./Recruit";

// Logo imports
import Ayutree from "../Images/Logo/Ayutree.png";
import Flipkart from "../Images/Logo/flipkart-logo.png";
import Meesho from "../Images/Logo/Meesho_logo.png";
import Pickyourtrail from "../Images/Logo/pickyourtrail.png";
import Root from "../Images/Logo/root.png";
import Media from "../Images/Logo/7media.png";
import Krishna from "../Images/Logo/krishna.png";

const logos = [
  Ayutree,
  Flipkart,
  Meesho,
  Pickyourtrail,
  Root,
  Media,
  Krishna,
];

const LogoSlider = () => {
  return (
    <>
      <div className="logo-slider-wrapper">
        <h2 className="logo-slider-title text-center mb-4">
          Our Happy Clients
        </h2>

        <div className="logo-slider">
          {/* Duplicate logos for infinite slider */}
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