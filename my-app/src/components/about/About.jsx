import React from 'react'
import { AppWrap } from "../../wrapper";
import './about.scss'
import { BsFillPersonFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

const About = () => {
    return (
            <section className='about'>
                <div className="container about__container">
                    <div className="about__header">
                        <div className="about__header--info">
                            About me 
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="about__content--left">
                            <div className="about__content--info">
                                <div className="about__icon">
                                    <BsFillPersonFill />
                                </div>
                                <div className="about__field">
                                    <div className="about__field--label">
                                        Name
                                    </div>
                                    <div className="about__field--value">
                                        John KIM
                                    </div>
                                </div>
                            </div>
                            <div className="about__content--info">
                                <div className="about__icon">
                                    <MdEmail />
                                </div>
                                <div className="about__field">
                                    <div className="about__field--label">
                                        Email
                                    </div>
                                    <div className="about__field--value">
                                        john.kim0306@gmail.com
                                    </div>
                                </div>
                            </div>
                            <div className="about__content--info">
                                <div className="about__icon">
                                    <FaUniversity />
                                </div>
                                <div className="about__field">
                                    <div className="about__field--label">
                                        University
                                    </div>
                                    <div className="about__field--value">
                                        University of Calgary
                                    </div>
                                </div>
                            </div>
                            <div className="about__content--info">
                                <div className="about__icon">
                                    <BiCurrentLocation />
                                </div>
                                <div className="about__field">
                                    <div className="about__field--label">
                                        Location
                                    </div>
                                    <div className="about__field--value">
                                        Canada
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about__content--right">
                            I am a recent graduate with a degree in computer science from the University of Calgary. I am passionate about developing an application that impacts people! I have worked with several teams and became very familiar with the software development process and its stages. I have experience with building applications  in a team that follows a fast-paced agile development. My job stretched from fixing bugs, built features, to working closely with stakeholders to transform product requirements into detailed designs and releasing the end product. I am comfortable working in a team-based environment or indepedently as I have previous experience with it. I take ownership of my work and am accountable for the quality and timeliness of an outcome.
                        </div>
                    </div>

                </div>
            </section>
    )
}

export default AppWrap(About, "about", "about");