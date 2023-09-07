import React from "react";
import "./App.css";
// Import components
import NavBar from "./components/navBar/navBar";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import CustomCarousel from "./components/carousel/carousel";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import { Fade, Slide } from "react-reveal";
// Configuration variables
const backgroundImage = require("./assets/img/background/background.jpg");
function App() {
  return (
    <div className="App">
      <NavBar />
      <Parallax bgImage={backgroundImage} bgImageAlt="background">
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
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
// Exporting the component
export default App;
