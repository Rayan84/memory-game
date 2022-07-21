import React from "react";
import 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  userParams
} from 'react-router-dom';

const Nav = () => {
  return(
    <Router>
      <div>
        <h2>Choose a level</h2>
        <ul>
          <li className='cursor-pointer list-style-none levels'>
            <Link to='/easy'>Easy</Link>
          </li>
          <li className='cursor-pointer list-style-none levels'>
            <Link to='/medium'>Medium</Link>
          </li>
          <li className='cursor-pointer list-style-none levels'>
            <Link to='/hard'>Hard</Link>
          </li>
      </ul>
      </div>

      <Routes>
        <Route path="/easy" element={<Easy />}/>
        <Route path="/medium" element={<Medium />}/>
        <Route path="/hard" element={<Hard />}/>
      </Routes>
    </Router>

  )
}

export default Nav;