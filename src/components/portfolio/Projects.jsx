import React from "react";
import simpsons from "../../assets/simpsons.jpg";
import weather from "../../assets/weather.jpg";
import fantasy from "../../assets/fantasy.jpg";
import blackjack from "../../assets/blackjack.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: simpsons,
      title: "Simpsons Quotes",
      github:
        "https://github.com/davidpiper89/FunctionalBasedReactReduxSimpsons",
      demo: "",
      info: "",
      skills:
        "Functional React.js, React Redux, Axios, Node.js",
    },
    {
      id: 2,
      image: weather,
      title: "Weather App",
      github: "https://github.com/davidpiper89/weatherproject",
      demo: "",
      skills: "HTML5, CSS, JavaScript",
    },
    {
      id: 3,
      image: fantasy,
      title: "Fantasy Football Front End",
      github:
        "https://github.com/davidpiper89/FunctionalBasedReactReduxSimpsons",
      demo: "",
      skills: "React.js, React Redux, Axios, CSS, Joi, React Webcam",
    },
    {
      id: 4,
      image: fantasy,
      title: "Fantasy Football Back End",
      github:
        "https://github.com/davidpiper89/FunctionalBasedReactReduxSimpsons",
      demo: "",
      skills:
        "Javascript, Axios, Express, CRUD, Middleware, Nodemailer, MySQL, pHpMyAdmin, Insomnia, FileZilla",
    },
    {
      id: 5,
      image: blackjack,
      title: "Blackjack App",
      github: "https://github.com/davidpiper89/piperscasino",
      demo: "",
      skills: "Functional React.js, React Redux, Axios, Node.js",
    },
  ];

  return (
    <section className="portfolio_container">
      {projects.map((project) => (
        <div className="project_container" key={project.id}>
          <h2 className="project_title">{project.title}</h2>
          <div className="project_content">
            <article className="project">
              <div className="image">
                <img src={project.image} alt="" width="300px" />
              </div>
              <div className="skills">
                <h3>Skills</h3>
                <p>{project.skills}</p>
              </div>
              <div className="links">
                <a
                  href={project.github}
                  target="_blank"
                  className="project_github"
                >
                  Github
                </a>
                <a href="" target="_blank" className="project_link">
                  Live Demo
                </a>
              </div>
            </article>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
