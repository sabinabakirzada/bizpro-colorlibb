import React, { useRef } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  // const headerelement = useRef(null);
  // window.addEventListener("scroll", () => {
  //   // headerelement.current?.classList.add("scroll");
  //   headerelement.current?.classList.toggle("scroll", window.scrollY > 0);
  // });
  // // console.log(headerelement.current);
  return (
    <header>
      <div className="container">
        <div className="header">
          <img
            src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png"
            alt=""
          />
          <nav className="h-nav">
            <ul className="h-ul">
              <NavLink to="/" className="li">
                HOME
              </NavLink>
              <NavLink to="/about" className="li">
                ABOUT
              </NavLink>
              <NavLink to="/service" className="li">
                SERVICES
              </NavLink>
              <NavLink to="/portfolio" className="li">
                PORTFOLIO
              </NavLink>
              <NavLink to="/team" className="li">
                TEAM
              </NavLink>
              <NavLink to="/skill" className="li">
                SKILL
              </NavLink>
              <NavLink to="/client" className="li">
                CLIENTS
              </NavLink>
              <NavLink to="/pricing" className="li">
                PRICING
              </NavLink>
              <NavLink to="/contact" className="li">
                CONTACT
              </NavLink>
              <NavLink to="/add" className="li">
                ADD
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
