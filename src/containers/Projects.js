import React from "react";
import salonpiekna from "../images/salonpiekna.jpg";
import welcome from "../images/welcome.jpg";
import todonew from "../images/todonew.jpg";
import savings from "../images/savings.jpg";
import todo from "../images/todo.jpg";
import CodeIcon from "@material-ui/icons/Code";
import VisibilityIcon from "@material-ui/icons/Visibility";

const Article = props => {
  const style = {
    fontSize: 20
  }
  
  return (
    <article className="projects__project">
      <div className="projects__project--about">
        <h5 className="projects__project--about--title">{props.title}</h5>
        <p>{props.text}</p>
        <div className="projects__project--about__boxlink">
          <a
            className="projects__project--about__boxlink--link"
            href={props.linkLive}
            target="_blank"
            rel="noopener noreferrer"
          >
            <VisibilityIcon style={style}/> Live
          </a>
          <a
            className="projects__project--about__boxlink--link"
            href={props.linkCode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeIcon style={style}/> Code
          </a>
        </div>
      </div>
      <img
        className="projects__project--img"
        src={props.picture}
        alt={props.alt}
      />
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1 className="projects__title">Projects</h1>

      <Article
        title="Welcome Page"
        text="Created in React, StyledComponent, RWD."
        linkLive="https://patrycjapaczkowska.github.io/Welcome-Page/"
        linkCode="https://github.com/PatrycjaPaczkowska/Welcome-Page"
        picture={welcome}
        alt="Welcome Page picture"
      />

      <Article
        title="ToDo application"
        text="Created in React, RWD."
        linkLive="https://patrycjapaczkowska.github.io/To-do-application/"
        linkCode="https://github.com/PatrycjaPaczkowska/To-do-application"
        picture={todonew}
        alt="Todo app picture"
      />

      <Article
        title="Beauty Salon"
        text="Created in JavaScript, Css, Flexbox, RWD."
        linkLive="https://umbbra.github.io/SalonPieknosci/"
        linkCode="https://github.com/umbbra/SalonPieknosci"
        picture={salonpiekna}
        alt="Beauty Salon picture"
      />


      <Article
        title="Savings application"
        text="Created in React, Sass, Flexbox, RWD."
        linkLive="https://umbbra.github.io/savings/"
        linkCode="https://github.com/umbbra/savings"
        picture={savings}
        alt="Savings app picture"
      />

      <Article
        title="ToDo application"
        text="Created in React, Css, RWD."
        linkLive="https://umbbra.github.io/todoapp/"
        linkCode="https://github.com/umbbra/todoapp/"
        picture={todo}
        alt="Todo app picture"
      />

      
    </section>
  );
};

export default Projects;
