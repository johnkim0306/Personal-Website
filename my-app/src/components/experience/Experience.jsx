import React from "react";
import { AppWrap } from "../../wrapper";
import "./experience.scss";

const Experience = () => {
  return (
      
    <section id='experience'>
      <div className="container experience__container">
        <div className="jobs">

          <div className="jobs__job">
            <h2 className="text-secondary">2021- Current </h2>
            <h3>Dotdash</h3>
            <h6>Frontend Developer</h6>
            <ul>
                <li>Collaborated with product managers, designers, and technical leads in order to develop product features for media websites that reach 150M+ people each month </li>
                <li>Added functionality to a custom server-side component framework used in cross-platform websites.</li>
                <li>Cswag</li>
                <li>Facilitating daily standups, retrospectives and planning meetings</li>
            </ul>
          </div>

          <div className="jobs__job">
            <div className="jobs__job--header">
                <h3> <b>Thales</b> <h9>Software Engineer Intern</h9></h3>
                <h6>Frontend Developer</h6>
                <h2 className="text-secondary">2020 </h2>
            </div>
            <ul>
                <li>Contributed to ongoing software application projects (front end and back end) which form DLS Configuration tool. Used Python for execution, automation, and data post-processing. </li>
                <li>Added functionality to a custom website framework used for all the branches in the engineering teams.</li>
                <li>Collaborated with product managers, and technical leads in 2-weeks agile sprints.</li>
                <li>Worked with internal and external stakeholders to transform product requirements into detailed design.</li>
            </ul>
          </div>

          <div className="jobs__job">
            <h2 className="text-secondary">2019 </h2>
            <h3>Ai4YouthCanada</h3>
            <h6>Software Engineer Intern</h6>
            <ul>
                <li>Developed test application with Unity to verify real-time behavior of the program on a target platform, successfully catching numerous minor bugs, and code violations.</li>
                <li>Delivered a high-quality VR simulation program in a fast-paced environment engaging up to 3 projects.</li>
                <li>Analyzed and evaluated real-time programs based on defined criteria including utility, relevance, and practicality.</li>
            </ul>
          </div>

          <div className="jobs__job">
            <h2 className="text-secondary">2018 </h2>
            <h3>University of Calgary</h3>
            <h6>Research Assistant</h6>
            <ul>
                <li>Initiated and coordinated a Text and Data Mining of large dataset extracted from mobile App Developement Teams using the program languages Java, Python, R-Language.</li>
                <li>Planned and coordinated NLP Topic Modeling using Python and R-language.</li>
                <li>Improved methods by proposing LDA algorithms and Gibbs Sampling Option that ended up on the final research paper.</li>
                <li>The paper got accepted and is published in the IEEE digital library.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

//export default Experience;
export default AppWrap(Experience, "experience", "experience");
