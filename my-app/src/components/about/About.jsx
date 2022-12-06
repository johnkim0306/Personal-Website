import React from 'react'
import { AppWrap } from "../../wrapper";
import './about.scss'
import Background from '../Background.tsx';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import TextSlider from "./TextSlider";
import ProgressBar from "./ProgressBar";
import Intro from "./Intro";
import styled from "styled-components";
gsap.registerPlugin(ScrollTrigger);

const Bold = styled.span`
  font-weight: 700;
  font-size: 1.3rem;
  margin-left: 0.3rem;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const About = () => {
    const imgRef = useRef(null);
    useEffect(() => {
        const el = imgRef.current;
        gsap.fromTo(el, {rotation: 0}, {rotation: 360, duration: 1, scrollTrigger: {
            trigger: el
        }})

    }, [])

    return (
            <section className='about' ref={imgRef}>
                <div className="container about__container">   
                    <TextSlider/>
                    <ProgressBar/>
                    <Intro/> 
                </div>
            </section>
    )
}

export default AppWrap(About, "about", "about");