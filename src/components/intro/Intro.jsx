import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
// import ME from '../../assets/Rasif Tagizade image.jpg';
import "./intro.css";
import IMG1 from "../../assets/DillonAbbott.jpg";
const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMG1}/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6.5 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am an innovative and passionate software engineer with 6 years of experience building and maintaining responsive web
            applications using modern web frontend and backend technology stack and cloud services to make the project another level
            and meaningful contributions to teams of varying sizes and scopes.
          </p>
          <p>
            I can deliver project's results with best quality on time.
            <br />
            Without doubt, I can satisfy your need in web&app field.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
