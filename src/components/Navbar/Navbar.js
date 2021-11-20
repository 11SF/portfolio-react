import React from "react";
import {Link} from "react-scroll";

import {Container} from "react-bootstrap";
import "./Navbar.css";

function Navbar({positionY}) {
  return (
    <div
      className="navbar fixed-top"
      style={{backgroundColor: `rgb(0, 18, 32, ${(positionY / 200) * 100}%)`}}
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <Container>
        <div className="nav_wrap">
          <div className="nav_group">
            <div className="nav_item">
              <Link
                className="nav_btn"
                to="landing_page"
                spy={true}
                smooth={true}
              >
                About
              </Link>
              <div className="text_line"></div>
            </div>
            <div className="nav_item">
              <Link
                className="nav_btn"
                to="skills_area"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Skills
              </Link>
              <div className="text_line"></div>
            </div>
            <div className="nav_item">
              <Link
                className="nav_btn"
                to="portfolio_area"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Portfolio
              </Link>
              <div className="text_line"></div>
            </div>
            {/* <div className="nav_item">
              <Link
                className="nav_btn"
                to="contact_area"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </Link>
              <div className="text_line"></div>
            </div> */}
          </div>
          <div className="nav_hamberger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              fill="#ffffff"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
