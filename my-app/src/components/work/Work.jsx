import React from "react";
import { useState } from "react";
import { AppWrap } from "../../wrapper/";
import mobile from "../../assets/mobile.png";
import arrow from "../../assets/arrow.png";
import sliderData from './sliderData';
import "./work.scss";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const length = sliderData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length -1 : currentSlide -1);
  };

  const moveDot = index => {
    setCurrentSlide(index -1);
  }

  return (
    <section className="works">
        <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
        <div className="works__header">
            <div className="title">Experience</div>
        </div>

        {sliderData.map((experience, index) => {
            return (
                    <div className={currentSlide === index ? "slide__active-anim" : "slide"} key={experience.id}>
                        <div className="slide--left">
                            <img
                                src={experience.icon}
                                alt=""
                            />
                            <h3>{experience.company}</h3>
                            <h3>{experience.date}</h3>
                        </div>
                        <div className="slide--right">
                            <div className="rightContainer">
                                <div className="imgContainer">
                                    <img src={mobile} alt="" />
                                    <h2>{experience.title}</h2>
                                </div>
                                <ul>
                                    <li>{experience.desc1}</li>
                                    <li>{experience.desc2}</li>
                                    <li>{experience.desc3}</li>
                                    {experience.desc4 ? <li>{experience.desc4} </li> : null }
                                </ul>
                                <p>{experience.desc}</p>
                            </div>
                        </div>

                        <div className="container-dots">
                            {Array.from({length: 4}).map((item, index) => (
                                <div 
                                onClick={ () => moveDot(index + 1)}
                                className={currentSlide === index ? "dot active" : "dot"}
                                ></div>
                            ))}
                        </div>
                    </div>
            )
        })}

        <div className="container-dots">
            {Array.from({length: 4}).map((item, index) => (
                <div 
                onClick={ () => moveDot(index + 1)}
                className={currentSlide === index ? "dot active" : "dot"}
                ></div>
            ))}
        </div>
    </section>
  );
};

export default AppWrap(Work, "work", "work");
