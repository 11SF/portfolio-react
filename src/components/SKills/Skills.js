import React from 'react'
import { Container } from 'react-bootstrap'

import './Skills.css';

function Skills() {
    return (
        <div className="skills_area">
            <Container className="waka_card">
                <h1 style={{color:"#ffffff", fontSize:"58px"}}>Skills</h1>
                <div className="card_area">
                    <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", marginBottom:"50px"}}>
                        <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/top-langs/?username=11SF&layout=compact&hide=Jupyter%20Notebook&theme=radical&langs_count=10" alt="rahuldkjain" />
                        <img className="img-fluid"src="https://github-readme-stats.vercel.app/api?username=11SF&show_icons=true&include_all_commits=true&count_private=true&theme=radical" alt="rahuldkjain" />
                    </div>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/wakatime?username=11SF&layout=compact&theme=radical" alt="rahuldkjain" />
                    </div>
                
                </div>
            </Container>
            {/* <img src="https://github-readme-stats.vercel.app/api?username=11SF&show_icons=true&include_all_commits=true&count_private=true" alt="rahuldkjain" />
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=11SF&layout=compact&hide=Jupyter Notebook" alt="aaa" /> */}
        </div>
    )
}

export default Skills
