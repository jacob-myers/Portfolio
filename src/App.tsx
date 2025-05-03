import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import './App.css'

import JNavbar from './components/Navbar'
import Home from './components/home/Home'
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';

function App() {

  return (

    <Router>
      <div className="App">
        <JNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

      </div>
    </Router>



  )
}

export default App
