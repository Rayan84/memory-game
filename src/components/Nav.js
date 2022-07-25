import React from "react";
import Easy from "./Easy";
import Medium from "./Medium";
import Hard from "./Hard";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  NavLink,
} from 'react-router-dom';

const Nav = () => {
  return(
    <div>
      <Router>

      <div>
        <ul>
          <li className='list-style-none levels-li'>
            <Link className='levels' to='/easy'>Easy</Link>
          </li>
          <li className='list-style-none levels-li'>
            <NavLink className='levels' to='/medium'>Medium</NavLink>
          </li>
          <li className='list-style-none levels-li'>
            <NavLink className='levels' to='/hard'>Hard</NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/easy" element={<Easy />} />
        <Route path="/medium" element={<Medium />} />
        <Route path="/hard" element={<Hard />} />

      </Routes>
    </Router>
    </div>
    
    


  )
}

export default Nav;