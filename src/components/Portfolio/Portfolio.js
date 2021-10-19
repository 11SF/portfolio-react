import React from 'react'
import { Container } from 'react-bootstrap'

import './Portfolio.css'
import ProjectCard from './ProjectCard'
import {projectList} from "../../data/data"

function Portfolio() {
    return (
        <div className="portfolio_area">
            <Container>
                <h1 style={{textAlign:"end", fontSize:"58px", color:"#ffffff"}}>Portfolio</h1>
                <div className="content_area">
                    {
                        projectList.map((value, index) => (
                            <ProjectCard key={index} img={value.img} name={value.name}/> 
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Portfolio
