import React from 'react'
import styled from "styled-components";
import { media } from "../../scss/theme";
import { projects } from "./data";
import ProjectBox from "./ProjectBox";
import { useState } from "react";
import { AppWrap } from '../../wrapper';
import mobile from '../../assets/mobile.png'
import arrow from '../../assets/arrow.png'
import trackerImage from '../../assets/trackerImage.png'
import './project.scss'

const Title = styled.div<{ text: string }>`
  color: #00FF94;
  position: absolute;
  box-sizing: border-box;
  font-size: 8rem;
  font-weight: 800;
  left: 10rem;
  width: 100%;
  ${media.mobile} {
    font-size: 6rem;
    left: 5rem;
    top: 1rem;
  }
  ::after {
    content: "${({ text }) => `${text}`}";
    position: absolute;
    color: transparent;
    -webkit-text-stroke: 0.1rem #001AFF;
    top: -0.4rem;
    left: -0.4rem;
  }
`;
const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  margin-top: 10rem;
  box-sizing: border-box;
  .contents {
    margin-top: 5rem;
    //background-color: #000;
    padding: 8rem;
    padding-bottom: 20rem;
    display: flex;
    flex-direction: column;
    &__content {
      padding-top: 5rem;
      width: 100%;
      color: white;
    }
    ${media.mobile} {
      padding: 7rem 4rem;
    }
  }
`;

const Project = () => {
    return (
            <section id='project' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="false" data-aos-mirror="true">
                <div className="container project__container">
                    <Container>
                        <Title text="Projects.">Projects.</Title>
                        <div className="contents">
                            {projects.map((project, idx) => (
                            <div className="contents__content">
                                <ProjectBox {...{ project, idx }} key={idx.toString()} />
                            </div>
                            ))}
                        </div>
                    </Container>
                </div>
            </section>
    )
}

export default AppWrap(Project, 'project', 'project');
