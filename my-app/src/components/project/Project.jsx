import React from 'react'
import { useState } from "react";
import { AppWrap } from '../../wrapper/';
import mobile from '../../assets/mobile.png'
import arrow from '../../assets/arrow.png'
import trackerImage from '../../assets/trackerImage.png'
import './project.scss'

const Project = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
          id: "1",
          icon: "./assets/mobile.png",
          title: "Web Design",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };    

    return (
            <section id='project'>
                <div className="container project__container">
                    <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                            <div className="item">
                                <div className="item__header">
                                    <h1>Covid React tracker</h1>
                                    <h2>2022.02 (Personal Project)</h2>
                                </div>
                                <div className="item__content">
                                    <div className="item__content--left">
                                        <img src={trackerImage} alt="Image Replacement" />
                                    </div>
                                    <div className="item__content--right">
                                        <div className="rightContainer">
                                            <div className="imgContainer">
                                                <img src={mobile}></img>
                                                <span>Project</span>
                                            </div>
                                            <ul>
                                                <li>Single-Page application react was used to create an application and renders components when data changes. Material-UI was used to construct the user interface.</li>
                                                <li>Used a javascript library Leaflet to implement a map with a clustering effect.</li>
                                                <li>Interacted with a web API to fetch data and render it.</li>
                                                <li>A naming methodology B.E.M was used to implement Atomic Design Principles with SASS.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <div className="item__footer-description">
                                        <div className="item__footer--label">
                                            About
                                        </div>
                                        <div className="item__footer--value">
                                            <p>The app captures the dynamics of coronavirus around the world. It tracks traditional measures such as positive tests, recovered, and deaths.</p>
                                        </div>
                                    </div>
                                    <div className="item__footer-description">
                                        <div className="item__footer--label">
                                            Github
                                        </div>
                                        <div className="item__footer--value">
                                            <a href="https://github.com/johnkim0306/react-covid-tracker">https://github.com/johnkim0306/react-covid-tracker</a>
                                        </div>
                                    </div>
                                    <div className="item__footer-description">
                                        <div className="item__footer--label">
                                            URL
                                        </div>
                                        <div className="item__footer--value">
                                            <p><a href="https://johnkim-covid19tracker.netlify.app">https://johnkim-covid19tracker.netlify.app</a></p>
                                        </div>
                                    </div>
                                    <div className="item__footer-description">
                                        <div className="item__footer--label">
                                            Frontend
                                        </div>
                                        <div className="item__footer--value">
                                            React, JavaScript, Sass
                                        </div>
                                    </div>
                                    <div className="item__footer-description">
                                        <div className="item__footer--label">
                                            Deployment
                                        </div>
                                        <div className="item__footer--value">
                                            Netlify
                                        </div>
                                    </div>
                                </div>
                            </div>                    
                    </div>
                </div>
                <img
                    src={arrow}
                    className="arrow left"
                    alt=""
                    onClick={() => handleClick("left")}
                />
                <img
                    src={arrow}
                    className="arrow right"
                    alt=""
                    onClick={() => handleClick("right")}
                />   
            </section>
    )
}

//export default Project
export default AppWrap(Project, 'project', 'project');
