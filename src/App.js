import logo from './logo.svg';
import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import {
  BrowserRouter as Router,
  Routes,
  // Link,
  Route,
  // NavLink,
} from 'react-router-dom';
import Easy from './components/Easy';
import Medium from './components/Medium';
import Hard from './components/Hard';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {window.location.pathname === '/' ? <WelcomePage /> : null}
        </div>

        <div>
      <Router>
      <Routes>
        <Route path="/medium" element={<Medium />} />
        <Route path="/hard" element={<Hard />} />
        <Route path="/easy" element={<Easy />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>  
    </div>  
      </header>
    </div>
  );
}

export default App;
