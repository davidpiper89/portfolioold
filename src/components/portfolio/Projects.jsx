import React from "react";
import simpsons from "../../assets/simpsons.jpg";
import weather from "../../assets/weather.jpg";
import fantasy from "../../assets/fantasy.jpg";
import blackjack from "../../assets/blackjack.jpg";
import chat from "../../assets/chat.jpg";

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
      skills: "Functional React.js, React Redux, Axios, Node.js",
      website: "https://simpsons.david-piper-portfolio.co.uk/",
    },
    {
      id: 2,
      image: weather,
      title: "Weather App",
      github: "https://github.com/davidpiper89/weatherproject",
      demo: "",
      skills: "HTML5, CSS, JavaScript, Axios",
      website: "https://vanillajs.david-piper-portfolio.co.uk/",
    },
    {
      id: 3,
      image: fantasy,
      title: "Fantasy Football Front End",
      github: "https://github.com/davidpiper89/fantasyfrontendgroup",
      demo: "",
      skills: "React.js, React Redux, Axios, CSS, Joi, React Webcam",
      website: "https://fantasy.david-piper-portfolio.co.uk/",
    },
    {
      id: 4,
      image: fantasy,
      title: "Fantasy Football Back End",
      github: "https://github.com/davidpiper89/fantasyfootballbackendgroup",
      demo: "",
      skills:
        "Javascript, Axios, Express, CRUD, Middleware, Nodemailer, MySQL, pHpMyAdmin, Insomnia",
      website: "https://fantasy.david-piper-portfolio.co.uk/",
    },
    {
      id: 5,
      image: blackjack,
      title: "Blackjack App",
      github: "https://github.com/davidpiper89/piperscasino",
      demo: "",
      skills: "Functional React.js, React Redux, Node.js, Bootstrap CSS",
      website: "https://blackjack.david-piper-portfolio.co.uk/",
    },
    {
      id: 6,
      image: chat,
      title: "Chat App",
      github: "https://github.com/davidpiper89/chatapp",
      demo: "",
      skills: "Functional React.js, Firebase, Tailwind CSS, Dotenv",
      website: "https://chatapp.david-piper-portfolio.co.uk/",
    },
  ];

  return (
    <section className="portfolio_container">
      {projects.map((project) => (
        <div className="project_container" key={project.id}>
          <h2 className="project_title">{project.title}</h2>

          <article className="project">
            <div className="image">
              <img src={project.image} alt="" width="300px" height="210px" />
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <p>{project.skills}</p>
            </div>
            <div className="links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project_github"
              >
                Github
              </a>
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="project_link"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>
      ))}
    </section>
  );
};

export default Projects;
