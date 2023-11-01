import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/kish.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/Krx.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Krishna kote</span>
          <span>
            Pharmacist with 4+ years of experience in using strong interpersonal skills and 
            extensive medication knowledge to help patients with their need.
          </span>
        </div>
        {/* <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link> */}
        {/* social icons */}
        {/* <div className="i-icons">
          <img src={Github} alt="" />
          <a href='https://www.facebook.com/profile.php?id=100009133581766&mibextid=ZbWKwL'  target="_blank"><img src={Facebook} alt="" /></a>
          <a href=' https://www.instagram.com/krish_kote?igshid=YmMyMTA2M2Y='  target="_blank"><img src={Instagram} alt="" /></a>
        </div> */}
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "48%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="i am a" text2="Pharmacist" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "4rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Registered by  " text2="(KPCRPWT)" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
