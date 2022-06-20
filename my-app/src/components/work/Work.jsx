import React from "react";
import { useState } from "react";
import { AppWrap } from "../../wrapper/";
import mobile from "../../assets/mobile.png";
import arrow from "../../assets/arrow.png";
//import trackerImage from "../../assets/trackerImage.png";
//my-app/src/assets/mobile.png
import "./work.scss";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
//import Experience from "../experience/Experience";

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const SliderData = [
    {
      id: "1",
      icon: "./assets/dotdash.jpeg",
      company: "Dotdash",
      title: "Frontend Developer",
      date: "2021-Current",
      desc1: "Collaborated with product managers, designers, and technical leads in order to develop product features for media websites that reach 150M+ people each month",
      desc2: "Added functionality to a custom server-side component framework used in cross-platform websites.",
      desc3: "Facilitating daily standups, retrospectives and planning meetings",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/thales.png",
      company: "Thales",
      title: "Software Engineer Intern",
      date: "2020",
      desc1: "Contributed to ongoing software application projects (front end and back end) which form DLS Configuration tool. Used Python for execution, automation, and data post-processing.",
      desc2: "Added functionality to a custom website framework used for all the branches in the engineering teams.",
      desc3: "Collaborated with product managers, and technical leads in 2-weeks agile sprints.",
      desc4: "Worked with internal and external stakeholders to transform product requirements into detailed design.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/AI4Youth.webp",
      title: "Ai4YouthCanada",
      date: "2019",
      company: "Software Engineer Intern",
      desc1: "Developed test application with Unity to verify real-time behavior of the program on a target platform, successfully catching numerous minor bugs, and code violations.",
      desc2: "Delivered a high-quality VR simulation program in a fast-paced environment engaging up to 3 projects.",
      desc3: "Analyzed and evaluated real-time programs based on defined criteria including utility, relevance, and practicality.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
        id: "4",
        icon: "./assets/uofc.png",
        title: "University of Calgary",
        date: "2018",
        company: "Research Assistant",
        desc1: "Initiated and coordinated a Text and Data Mining of large dataset extracted from mobile App Development Teams using the program languages Java, Python, R-Language.",
        desc2: "Planned and coordinated NLP Topic Modeling using Python and R-language.",
        desc3: "Improved methods by proposing LDA algorithms and Gibbs Sampling Option that ended up on the final research paper.",
        desc4: "The paper got accepted and published in the IEEE digital library.",
        img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      },
  ];
  const length = SliderData.length;

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

        {SliderData.map((experience, index) => {
            return (
                    <div className={currentSlide === index ? "slide__active-anim" : "slide"} key={experience.id}>
                        <div className="slide--left">
                            <img
                                src={experience.icon}
                                alt=""
                            />
                            <h3>{experience.company}</h3>
                        </div>
                        <div className="slide--right">
                            <div className="rightContainer">
                                <div className="imgContainer">
                                    <img src={mobile} alt="" />
                                </div>
                                <h2>{experience.title}</h2>
                                <h3>{experience.date}</h3>
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

//export default Work
export default AppWrap(Work, "work", "work");
