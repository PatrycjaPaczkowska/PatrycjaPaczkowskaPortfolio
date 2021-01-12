import React from "react";
import "../sass/main.scss";
import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
