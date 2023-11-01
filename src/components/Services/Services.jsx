import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import { themeContext } from "../../Context";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My <img src={HeartEmoji}/>Lovely</span>
        <span>family</span>
        
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
     
    </div>
  );
};

export default Services;
