import React from "react";

import {Container, Button} from "react-bootstrap";
import moon from "../../assets/images/moon.png";
import cv from "../../assets/pdf/cv_nawapong.pdf";
import "./LandingPage.css";

function LandingPage({positionY}) {
  return (
    <div className="landing_page">
      <div className="star_bg">
        <img
          className="moon img-fluid"
          src={moon}
          style={{
            top: `${Math.pow(positionY, 1.12)}px`,
            right: `${positionY}px`,
            opacity: `${100 - (positionY / 450) * 100}%`,
          }}
          alt="moon"
        ></img>
        <Container>
          <div className="content" data-aos="zoom-in" data-aos-duration="800">
            <div className="pic">
              <img
                className="img"
                src="https://cdn.discordapp.com/attachments/557626019247423508/870389553003896902/107698195_2967815813287518_541907919760258090_n.png"
                alt="pic_profile"
              ></img>
            </div>
            <div className="text_area">
              <h1 style={{fontSize: "48px"}}>Nawapong Sitaruno</h1>
              <code style={{fontSize: "40px"}}>11SF</code>
              <div className="line_group">
                <hr
                  style={{
                    border: "2px solid",
                    borderRadius: "20px",
                    width: "329px",
                    margin: "10px 0",
                  }}
                />
                <hr
                  style={{
                    border: "2px solid",
                    borderRadius: "20px",
                    width: "246px",
                    margin: "10px 0",
                  }}
                />
                <hr
                  style={{
                    border: "2px solid",
                    borderRadius: "20px",
                    width: "300px",
                    margin: "10px 0 35px 0",
                  }}
                />
              </div>
              <div>
                <p style={{display: "inline", fontSize: "20px"}}>
                  📖 Studying in Com-Sci at
                </p>
                <p
                  style={{
                    color: "#FFD13F",
                    display: "inline",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  Thammasat{" "}
                </p>
                <p
                  style={{
                    color: "#C3002F",
                    display: "inline",
                    fontSize: "20px",
                  }}
                >
                  University
                </p>
              </div>
              <p style={{fontSize: "20px", marginBottom: "0"}}>
                📬 nawapong.sit@gmail.com
              </p>
              <p style={{fontSize: "20px", marginBottom: "0"}}>
                📞 +66 623510099
              </p>
              <a href={cv}>
                <Button style={{marginTop: "20px"}}>Download CV</Button>
              </a>
            </div>
          </div>
        </Container>
        <div
          className="mountain"
          data-aos="fade-up"
          data-aos-duration="800"
        ></div>
        <div
          className="mountain_wave"
          data-aos="fade-up"
          data-aos-duration="800"
        ></div>
      </div>
    </div>
  );
}

export default LandingPage;
