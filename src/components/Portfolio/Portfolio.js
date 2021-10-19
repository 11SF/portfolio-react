import React from 'react'
import { Container } from 'react-bootstrap'

import './Portfolio.css'
import ProjectCard from './ProjectCard'

import cs264 from "../../assets/images/project/cs264-project.netlify.app_.png";
import cs251 from "../../assets/images/project/cs251.png";
import family_pay from "../../assets/images/project/family-pay-14de8.web.app_spotify_FFmZb (1).png";
import netflix_clone from "../../assets/images/project/netflix-clone-11sf.netlify.app_.png";
import popgop from "../../assets/images/project/popgop.netlify.app_.png";
import spotify_flutter from "../../assets/images/project/spotify_flutter.jpg";
function Portfolio() {
    return (
        <div className="portfolio_area">
            <Container>
                <h1 style={{textAlign:"end", fontSize:"58px", color:"#ffffff"}}>Portfolio</h1>
                <div className="content_area">
                    <ProjectCard img={cs264} name="Late Regisration System for CS Department"/> 
                    <ProjectCard img={cs251} name="Academic Management Systems"/>

                    <ProjectCard img={family_pay} name="Family Pay"/> 
                    <ProjectCard img={netflix_clone} name="Netflix Clone"/>
                    <ProjectCard img={popgop} name="POPGOP"/> 
                    <ProjectCard img={spotify_flutter} name="Spotify Pay Application"/>
                    {/* <ProjectCard img="" name="Covid-19 today Application"/> */}

                    {/* <ProjectCard img={project} name="ระบบลงทะเบียนเรียนล่าช้า"/>                   */}
                </div>
            </Container>
        </div>
    )
}

export default Portfolio
