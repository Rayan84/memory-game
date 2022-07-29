import React from "react";
import {
  Link,
  NavLink,
} from 'react-router-dom';

const Nav = () => {
  return(
    <div>
      <div>
        <ul>
          <li className='list-style-none levels-li'>
            <NavLink to='/easy' className='text-decoration-none levels'>Easy</NavLink>
          </li>
          <li className='list-style-none levels-li'>
            <Link to='/medium' className='text-decoration-none levels'>Medium</Link>
          </li>
          <li className='list-style-none levels-li'>
            <Link to='/hard' className='text-decoration-none levels'>Hard</Link>
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