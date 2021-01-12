import React from "react";
const Skills = () => {
  return (
    <section id="tech" className="skills">
      <h2 className="skills__mainTitle">Technological stack</h2>
      <div className="skills__skill">
        <h2 className="skills__title">Main technologies</h2>
        <section className="skills__listOfMainTech">
          <p>React</p>
          <p>JavaScript5/ES6</p>
          <p>Responsive Web Design</p>
          <p>Sass</p>
          <p>CSS</p>
          <p>Html</p>
          <p>Git</p>
          <p>Webpack</p>
        </section>
      </div>
      <div className="skills__skill">
        <h2 className="skills__title">Other technologies</h2>
        <section className="skills__listOfOtherTech">
          <p>Styled Components</p>
          <p>Using Context</p>
          <p>Flexbox/Grid</p>
          <p>Methodology BEM</p>
          <p>Basics of Vue and Pug</p>
          <p>Basics of Linux and Vim</p>
          <p>Basics of PhotoShop and GIMP</p>
        </section>
      </div>
      <div className="skills__skill">
        <h2 className="skills__title">Languages</h2>
        <section className="skills__listOfLang">
          <p>English - intermediate, allowing to read the documentation</p>
        </section>
      </div>
    </section>
  );
};

export default Skills;
