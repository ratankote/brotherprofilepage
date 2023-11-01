import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>krishnaKote@gmail.com</span>
        <div className="f-icons">
          <a href=""><Facebook color="white" size={"3rem"} /></a>
          <a href=' https://www.instagram.com/krish_kote?igshid=YmMyMTA2M2Y='  target="_blank"><Insta color="white" size={"3rem"} /></a>
          <a href='https://www.facebook.com/profile.php?id=100009133581766&mibextid=ZbWKwL'  target="_blank"><img src={Facebook} alt="" /></a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
