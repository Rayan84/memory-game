import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <WelcomePage />
        </div>
  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Us
        </a>
      </header>
    </div>
  );
}

export default App;
