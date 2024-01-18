import React, { NavLink } from "react";
import { FaRegHeart } from "react-icons/fa";
import "./index.scss";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <p>
            Copyright @2018 All rights reserved | This template is made with{" "}
            <FaRegHeart className="heart"/> by
          </p>
          <p className="footer-p">Colorlib</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
