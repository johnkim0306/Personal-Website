import React from 'react'
import { AppWrap } from "../../wrapper";
import './about.scss'

const About = () => {
    return (
        <div>
            <section id='about'>
            <div className="container about__container">
                <div className="header">
                    <div className="header__title">
                        Hello. Welcome to my portfolio. 
                    </div>
                </div>
                <div className="content">
                    <div className="content__info">
                        name
                    </div>
                    <div className="content__info">
                        education
                    </div>
                    <div className="content__info">
                        email
                    </div>
                    <div className="content__info">
                        Location
                    </div>
                    
                </div>
            </div>
            </section>
        </div>
    )
}

//export default About
export default AppWrap(About, "about", "about");