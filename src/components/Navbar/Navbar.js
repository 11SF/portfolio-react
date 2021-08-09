import React from 'react'

import { Container } from 'react-bootstrap'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <Container>
                <div  className="nav_wrap">
                    <div className="nav_group">
                        <div className="nav_item">
                            <a className="nav_btn" href="##">About</a>
                            <div className="text_line"></div>
                        </div>
                        <div className="nav_item">
                        <a className="nav_btn" href="##">Skills</a>
                            <div className="text_line"></div>
                        </div>
                        <div className="nav_item">
                        <a className="nav_btn" href="##">Portfolio</a>
                            <div className="text_line"></div>
                        </div>
                        <div className="nav_item">
                        <a className="nav_btn" href="##">Contact</a>
                            <div className="text_line"></div>
                        </div>
                    </div>
                </div>
            </Container> 
        </div>
    )
}

export default Navbar
