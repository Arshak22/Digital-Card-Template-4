import React from "react";
import "./style.css";

import logo from "../../assets/Logo.png";
import agentPic from "../../assets/agentPic.jpg";
import topBG from "../../assets/TopBG.jpg";
import bg from "../../assets/BG1.jpg";

//Icons
import { FaPhone } from "react-icons/fa6";
import { BsEnvelopePaperFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

import { FaGlobe } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

export default function IntroSection() {
  return (
    <div className="IntroSection">
      <div className="top-bg">
        <img src={topBG} alt="top-bg" />
      </div>
      <div className="topLogo">
        <img src={logo} alt="logo" />
      </div>
      <div className="agent-image-sec">
        <div className="agentPic">
          <img src={agentPic} alt="agentPic" />
        </div>
      </div>
      <div className="agent-name-info">
        <h1 className="agent-name">Jane Smith</h1>
        <h2 className="agent-name agent-profession">Real Estate Agent</h2>
      </div>
      <div className="main-social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <div className="main-contact-l">
            <div className="main-contact-icon">
              <FaPhone />
            </div>
            <h3>+01 123 423 10101</h3>
          </div>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <div className="main-contact-r">
            <h3>mail@gmail.com</h3>
            <div className="main-contact-icon">
              <BsEnvelopePaperFill />
            </div>
          </div>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <div className="main-contact-l">
            <div className="main-contact-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>7 Seven Avenue, Ney York, NY, 1211</h3>
          </div>
        </a>
      </div>
      <div className="social-icons">
        <div className="social-icon">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="secondary-icon">
              <FaGlobe />
            </div>
          </a>
        </div>
        <div className="social-icon">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="secondary-icon">
              <FaFacebookF />
            </div>
          </a>
        </div>
        <div className="social-icon">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="secondary-icon">
              <AiFillInstagram />
            </div>
          </a>
        </div>
        <div className="social-icon">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="secondary-icon">
              <FaLinkedinIn />
            </div>
          </a>
        </div>
      </div>
      <div className="social-icons">
        <div className="social-icon">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="secondary-icon">
              <BsTwitterX />
            </div>
          </a>
        </div>
        <div className="social-icon">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="secondary-icon">
              <FaYoutube />
            </div>
          </a>
        </div>
        <div className="social-icon">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="secondary-icon">
              <FaFacebookMessenger />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
