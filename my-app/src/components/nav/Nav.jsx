import React from 'react'
import './nav.scss'

export function Nav({ menuOpen, setMenuOpen }) {
    return (
        <div className={"nav " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#header" className="logo"> John's portfolio</a>
                    <div className="itemContainer">
                        <a href="#header">Home</a>
                    </div>
                    <div className="itemContainer">
                        <a href="#about">About</a>
                    </div>
                    <div className="itemContainer">
                        <a href="#work">Career</a>
                    </div>
                    <div className="itemContainer">
                        <a href="#project">Projects</a>
                    </div>
                    <div className="itemContainer">
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
