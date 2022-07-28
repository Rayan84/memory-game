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
import Nav from './components/Nav';
function App() {
  // const currentPath = window.location.pathname;


  return (
    <div className="App">
      <header className="App-header">
 

        <div>
      <Router>
      <Routes>
        <Route path="/medium" element={<Medium />} />
        <Route path="/hard" element={<Hard />} />
        <Route path="/easy" element={<Easy />} />
        <Route path="/" element={<div><WelcomePage /> <Nav /></div>} />
      </Routes>
    </Router>  
    </div>  
      </header>
    </div>
  );
}

export default App;
