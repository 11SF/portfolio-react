import React from 'react'

import { Container } from 'react-bootstrap'
import './LandingPage.css'

import moon from '../../assets/images/moon.png';
function LandingPage() {
    return (
        <div className="landing_page">
            <img className="moon" src={moon} width="1400" alt="moon"></img>
            <Container>
                <div className="content">
                    <div className="pic">
                        <img className="img" src="https://cdn.discordapp.com/attachments/557626019247423508/870389553003896902/107698195_2967815813287518_541907919760258090_n.png" alt="pic_profile"></img>
                    </div>
                    <div className="text_area">
                        <h1>Nawapong Sitaruno</h1>
                        <h3>นวพงศ์ สิตะรุโณ</h3>
                        <br />
                        <br />
                        <br />
                        <p>Studying at Com-Sci 
                                <p style={{color:"#FFD13F",display: 'inline'}}> Thammasat </p> 
                                <p style={{color:"#C3002F",display: 'inline'}}>University</p>
                        </p>
                        <p>nsfolknsf@gmail.com</p>
                        <p>+66 623510099</p>
                    </div>
                </div>
            </Container>
            <div className="mountain"></div>
            <div className="mountain_wave"></div>
        </div>
    )
}

export default LandingPage
