import React from "react";
import {Container} from "react-bootstrap";
import SkillCard from "./SkillCard";
import "./Skills.css";

import c_logo from "../../assets/icons/c-program.svg";
import cPlus_logo from "../../assets/icons/icons8-c++.svg";
import java_logo from "../../assets/icons/icons8-java.svg";
import python_logo from "../../assets/icons/icons8-python.svg";
import javaScript_logo from "../../assets/icons/icons8-javascript.svg";
import dart_logo from "../../assets/icons/icons8-dart.svg";

import react_logo from "../../assets/icons/react-js.svg";
import vue_logo from "../../assets/icons/vue-js.svg";
import express_logo from "../../assets/icons/expressjs-ar21.svg";
import flutter_logo from "../../assets/icons/icons8-flutter.svg";
import tailwind_logo from "../../assets/icons/tailwindcss.svg";
import bootstrap_logo from "../../assets/icons/icons8-bootstrap.svg";

import git_logo from "../../assets/icons/icons8-git.svg";
import docker_logo from "../../assets/icons/icons8-docker.svg";
import selenium_logo from "../../assets/icons/icons8-selenium.svg";
import jwt_logo from "../../assets/icons/icons8-json-web-token.svg";

let languages = [
  {
    icon: c_logo,
    name: "C",
  },
  {
    icon: cPlus_logo,
    name: "C++",
  },
  {
    icon: java_logo,
    name: "Java",
  },
  {
    icon: python_logo,
    name: "Python",
  },
  {
    icon: javaScript_logo,
    name: "JavaScript",
  },
  {
    icon: dart_logo,
    name: "Dart",
  },
];
let frameworks = [
  {
    icon: react_logo,
    name: "ReactJS",
  },
  {
    icon: vue_logo,
    name: "VueJS",
  },
  {
    icon: express_logo,
    name: "ExpressJS",
  },
  {
    icon: flutter_logo,
    name: "Flutter",
  },
  {
    icon: tailwind_logo,
    name: "TailwindCSS",
  },
  {
    icon: bootstrap_logo,
    name: "Bootstrap",
  },
];
let tools = [
  {
    icon: git_logo,
    name: "Git",
  },
  {
    icon: docker_logo,
    name: "Docker",
  },
  {
    icon: selenium_logo,
    name: "Selenium",
  },
  {
    icon: jwt_logo,
    name: "JWT",
  },
];

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
