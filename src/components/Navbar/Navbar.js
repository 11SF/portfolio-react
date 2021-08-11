import React from 'react'

import { Container } from 'react-bootstrap'
import './Navbar.css'

function Navbar({ positionY }) {
    const opacityValue = () => console.log(100 - ((positionY / 200) * 100))
    // const debug = () => console.log(positionY);
    return (
        <div className="navbar fixed-top" style={{backgroundColor:`rgb(0, 18, 32, ${((positionY / 200) * 100)}%)`}}>
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
