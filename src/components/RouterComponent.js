import React from 'react';
import WelcomePage from './WelcomePage';
import {
  BrowserRouter as Router,
  Routes,
  // Link,
  Route,
  // NavLink,
} from 'react-router-dom';
import Easy from './Easy';
import Medium from './Medium';
import Hard from './Hard';
import Nav from './Nav';

const RouterComponent = () => {
  return(

    <Router>
      <Routes>
        <Route path="/medium" element={<Medium />} />
        <Route path="/hard" element={<Hard />} />
        <Route path="/easy" element={<Easy />} />
        <Route path="/" element={<div><WelcomePage /> <Nav /></div>} />
      </Routes>
    </Router>  
    )
  }

  export default RouterComponent