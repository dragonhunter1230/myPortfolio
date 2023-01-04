import React from "react";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/Covid-19 Project.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";

import "./portfolio.css";
//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Products-Care Be Well Website with React.js",
      img: IMG1,
      description:
        "An Care Be Well Website is an electronic store website to service various prodducts for people.",
      technologies: "React Js | Node Js | CSS",
      link: "https://carebewell.com/shop",
      github: "https://github.com/Rasif-Taghizada/Educational-Website-ReactJs",
    },
    {
      id: 2,
      title: "Fishing Kayak Accessories-Fishing & Boating Project",
      img: IMG2,
      description: "This site is a kind of platform for recreation. You can register and reserve your fishing , boating and so on.",
      technologies: "Next JS | Spring Boot | Node Js",
      link: "https://www.getwetoutdoors.com.au",
      github: "https://github.com/Rasif-Taghizada/RubyCode-Blog",
    },
    {
      id: 3,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://alpha-agency-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    },
    {
      id: 4,
      title: "Covid-19 Tracking App",
      img: IMG4,
      description:
        "The COVID Tracking Project collects and publishes the most complete testing data available for all areas of the world.",
      technologies: "React | Redux",
      link: "https://www.getwetoutdoors.com.au",
    },
    {
      id: 5,
      title: "Jokes Project with Typescript",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Html | Styled-components | Typescript",
      link: "https://jokes-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Joke-App",
    },
    {
      id: 6,
      title: "Fs Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://fs-poster-project.netlify.app/",
      github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
