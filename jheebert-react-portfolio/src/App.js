import React from "react";
import "./App.css";
// Import components
import NavBar from "./components/navBar/navBar";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { Container } from "react-bootstrap";

// App component
function App() {
  return (
    <div className="App">
      <NavBar />
        <Container>
        </Container>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
// Exporting the component
export default App;
