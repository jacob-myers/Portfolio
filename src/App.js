import logo from './logo.svg';
import './App.css';

// React rotating image.
// <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <title>Jake Myers</title>
      <header className="App-header">
        <p>
          Portfolio of Jake Myers.
        </p>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/jacob-m-myers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me on LinkedIn
        </a>

        <a
          className="App-link"
          href="https://github.com/jacob-myers"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>

        <a
          className="App-link"
          href="https://crypto-veil.web.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Veil
        </a>
    
      </header>
    </div>
  );
}

export default App;
