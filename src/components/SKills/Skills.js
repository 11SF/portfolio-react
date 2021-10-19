import React from "react";
import {Container} from "react-bootstrap";
import SkillCard from "./SkillCard";
import {languages, frameworks, tools} from "../../data/data"
import "./Skills.css";

function Skills() {
  return (
    <div className="skills_area">
      <Container className="waka_card">
        <h1 style={{color: "#ffffff", fontSize: "58px"}}>Skills</h1>
        <div className="card_area">
          <div className="wrap_card_area">
            <h1 style={{color: "#ffffff", marginBottom: "50px"}}>Languages</h1>
            <div
              className="flex_card"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              {languages.map((value, index) => (
                <SkillCard key={index} icon={value.icon} name={value.name} />
              ))}
            </div>
          </div>

          <div className="wrap_card_area">
            <h1 style={{color: "#ffffff", marginBottom: "50px"}}>
              Frameworks & Library
            </h1>
            <div
              className="flex_card"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              {frameworks.map((value, index) => (
                <SkillCard key={index} icon={value.icon} name={value.name} />
              ))}
            </div>
          </div>

          <div className="wrap_card_area">
            <h1 style={{color: "#ffffff", marginBottom: "50px"}}>Tools</h1>
            <div
              className="flex_card"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              {tools.map((value, index) => (
                <SkillCard key={index} icon={value.icon} name={value.name} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Skills;
