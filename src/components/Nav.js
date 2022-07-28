import React from "react";
// import Easy from "./Easy";
// import Medium from "./Medium";
// import Hard from "./Hard";
// import { useState } from "react";
import {
  // BrowserRouter as Router,
  // Routes,
  Link,
  // Route,
  NavLink,
} from 'react-router-dom';

const Nav = () => {
  // const [render, setRender] = useState(false);
  // const currentPath = window.location.pathname;


  return(
    
    <div>

      {/* <Router> */}
        
      <div>
        <ul>
          <li className='list-style-none levels-li'>
            <NavLink to='/easy' className='levels'>Easy</NavLink>
          </li>
          <li className='list-style-none levels-li'>
            <Link to='/medium' className='levels'>Medium</Link>
          </li>
          <li className='list-style-none levels-li'>
            <Link to='/hard' className='levels'>Hard</Link>
          </li>
        </ul>
      </div> 
      {/* <Routes>
        <Route path="/medium" element={<Medium />} />
        <Route path="/hard" element={<Hard />} />
        <Route path="/easy" element={<Easy />} />
      </Routes>
    </Router>  */}

    </div>
  )
}

export default Nav;