//import logo from './logo.svg';
import React from "react";
import './App.css';
import './styles.css';
// Imported components HAVE to start with a capital or they will be ignored, no error
import JNavbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

// React rotating image.
// <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <title>Jake Myers</title>
      <JNavbar />

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
