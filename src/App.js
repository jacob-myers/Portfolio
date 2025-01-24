//import logo from './logo.svg';
import React from "react";
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Imported components HAVE to start with a capital or they will be ignored, no error
import JNavbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import azamiImg from "../src/Assets/azami.png";
import selfImg from "../src/Assets/self.png"
import HomeCard from "./components/Home/HomeCard";

// React rotating image.
// <img src={logo} className="App-logo" alt="logo" />

function App() {
  // For the actual document itself.
  document.body.style = "background: black";
  return (
    <div className="App">
      <title>Jake Myers</title>
      <JNavbar />

      <Container fluid className="body">
        <Row style={{ display: 'flex', justifyContent: "center", padding: "10px" }}>
          <Col
            className="content-col"
            md={6}
            style={{
              justifyContent: "right",
              paddingTop: "30px",
              paddingBottom: "50px",
              width: "500px"
            }}
          >
            <HomeCard/>
          </Col>
          
          <Col
            className="content-col"
            md={6}
            style={{
              justifyContent: "left",
              paddingTop: "30px",
              paddingBottom: "50px",
              width: "700px"
            }}
          >
            <img src={selfImg} alt="art" className="img-self" />
          </Col>
        </Row>

      </Container>

      <div>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/jacob-m-myers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me on LinkedIn
        </a>
      </div>

      <div>
        <a
          className="App-link"
          href="https://github.com/jacob-myers"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
      </div>
      

      <div>
        <a
          className="App-link"
          href="https://crypto-veil.web.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Veil
        </a>
      </div>

      
    </div>
    
  );
}

export default App;
