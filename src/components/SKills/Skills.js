import React from 'react'
import { Container } from 'react-bootstrap'

import './Skills.css';

function Skills() {
    return (
        <div className="skills_area">
            <Container className="waka_card">
                <h1 style={{color:"#ffffff"}}>Skills</h1>
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=11SF&layout=compact&hide=Jupyter Notebook" alt="aaa" /> 
            </Container>
            {/* <img src="https://github-readme-stats.vercel.app/api?username=11SF&show_icons=true&include_all_commits=true&count_private=true" alt="rahuldkjain" />
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=11SF&layout=compact&hide=Jupyter Notebook" alt="aaa" /> */}
        </div>
    )
}

export default Skills
