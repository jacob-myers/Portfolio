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
  //Navigate
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

// React rotating image.
// <img src={logo} className="App-logo" alt="logo" />

function App() {
  // For the actual document itself.
  document.body.style = "background: black";
  return (
    <Router>
      <div className="App">
        <JNavbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
