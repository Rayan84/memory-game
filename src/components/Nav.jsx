import React from "react";
import {
    Link,
    NavLink
} from "react-router-dom";

function Nav () {

    return (
        <div>
            <div>
                <ul>
                    <li className="list-style-none levels-li">
                        <NavLink
                            className="text-decoration-none levels"
                            to="/easy"
                        >
                            Easy
                        </NavLink>
                    </li>

                    <li className="list-style-none levels-li">
                        <Link
                            className="text-decoration-none levels"
                            to="/medium"
                        >
                            Medium
                        </Link>
                    </li>

                    <li className="list-style-none levels-li">
                        <Link
                            className="text-decoration-none levels"
                            to="/hard"
                        >
                            Hard
                        </Link>
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
    );

}

export default Nav;
