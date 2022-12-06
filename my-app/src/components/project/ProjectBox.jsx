import styled from "styled-components";
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Website } from '../../assets/website.svg';
import { media } from "../../scss/theme";

const ProjectBox = ({ project, idx }) => {
  const isEven = (idx + 1) % 2 === 0;
  return (
    <Container data-aos={isEven ? "flip-right" : "flip-left"}>
      <div
        className={
          isEven ? "container blue-container" : "container green-container"
        }
      >
        <div className="title">{project.title}</div>
        <div className="date">{project.date}</div>
        <div className="skills">
          {project.skills.map((skill) => (
            <div className="skills__skill">{skill}</div>
          ))}
        </div>
        <div className="intro">{project.about}</div>
        <div style={{ marginTop: "0.5rem" }}>
          {project.contents.map((content) => (
            <div className="content">{content}</div>
          ))}
        </div>
        <div className="icons">
          {project?.github && (
            <Github
              className="svg"
              onClick={() => window.open(project.github)}
            />
          )}
          {project?.website && (
            <Website
              className="svg"
              onClick={() => window.open(project.website)}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .container {
    padding: 2rem;
    position: relative;
    border-radius: 2rem;
    background-color: #101010;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${media.mobile} {
      margin-bottom: 1rem;
    }
    .title {
      font-weight: 800;
      position: absolute;
      padding: 1rem;
      border-radius: 2rem;
      top: -2rem;
      padding: 1rem;
    }
    .date {
      padding: 0 1rem;
      position: absolute;
      background-color: #101010;
      top: -0.1rem;
      color: white;
      ${media.mobile} {
        top: -0.2rem;
      }
    }
    .skills {
      display: flex;
      margin: 0.5rem 0;
      &__skill {
        background-color: #fff;
        color: #000;
        padding: 0.2rem;
        border-radius: 0.5rem;
        :not(:first-child) {
          margin-left: 0.5rem;
          ${media.mobile} {
            margin-left: 0;
          }
        }
      }
      ${media.mobile} {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        &__skill {
          margin-right: 0.5rem;
          margin-top: 0.3rem;
          padding: 0.2rem 0.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      }
    }
    .intro {
      margin: 0.5rem 0;
      font-weight: 800;
      font-size: 1.2rem;
    }
    .content {
      line-height: 1.5rem;
      ${media.mobile} {
        line-height: 2rem;
      }
    }
    .icons {
      display: flex;
      position: absolute;
      bottom: -1rem;
      right: 2rem;
      ${media.mobile} {
        bottom: -2.5rem;
      }
    }
    .svg {
      cursor: pointer;
      :hover {
        fill: white;
      }
      :not(:last-child) {
        margin-right: 0.5rem;
      }
      ${media.mobile} {
        width: 3rem;
      }
    }
  }
  .green-container {
    margin-right: 30rem;
    border: 0.1rem solid #00f18c;
    .title {
      color: #000;
      background-color: #00f18c;
      border: 0.1rem solid #00f18c;
      left: -3rem;
      transform: rotate(-10deg);
    }
    .date {
      right: 2rem;
    }
    .intro {
      color: #00f18c;
    }
    .svg {
      fill: #00f18c;  
    }
    .icons {
      color: #00f18c;
    }
    ${media.mobile} {
      margin-right: 0;
    }
  }
  .blue-container {
    margin-left: 30rem;
    border: 0.1rem solid #2c3fe9;
    .title {
      color: #fff;
      background-color: #2c3fe9;
      border: 0.1rem solid #2c3fe9;
      left: -3rem;
      transform: rotate(-10deg);
    }
    .date {
      right: 2rem;
    }
    .intro {
      color: #2c3fe9;
    }
    .svg {
      fill: #2c3fe9;
    }
    ${media.mobile} {
      margin-left: 0;
    }
  }
`;

export default ProjectBox;