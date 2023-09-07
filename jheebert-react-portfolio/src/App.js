import React from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import CustomCarousel from "./components/carousel/carousel";
import About from "./components/about/about";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Skills from "./components/skills/skills";
import Projects from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

// App component to render the entire application
function App() {
  return (
    <div className="App">
      <NavBar />
      <Parallax bgImage={require("./assets/img/background/background.jpg")} bgImageAlt="background">
        <Container>
          <Fade left>
            <Slide bottom>
              <CustomCarousel />
            </Slide>
          </Fade>
        </Container>
      </Parallax>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
