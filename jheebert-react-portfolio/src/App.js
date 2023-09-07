import React from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import CustomCarousel from "./components/carousel/carousel";
import HomeMessage from "./components/homeMessage/homeMessage";
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
    <div className="App" style={{ position: "relative" }}>
      <NavBar />
      <CustomCarousel />
      <HomeMessage />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallax/background.jpg")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade left duration={2000}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <div>
          <Container className="container-box rounded">
            <Fade right duration={2000}>
              <Skills />
            </Fade>
          </Container>
        </div>

        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={1000}>
              <hr />
              <Projects />
            </Slide>
          </Container>
        </div>

        <div>
          <Container className="container-box rounded">
            <Slide left duration={2000}>
              <hr />
            </Slide>
          </Container>
        </div>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade bottom duration={2000}>
            <hr />
            <Contact />
          </Fade>
        </Container>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;