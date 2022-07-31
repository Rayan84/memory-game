import {
    BrowserRouter as Router,
    Routes,
    // Link,
    Route
    // NavLink,
} from "react-router-dom";
import React from "react";
import WelcomePage from "./WelcomePage";
import Easy from "./Easy";
import Medium from "./Medium";
import Hard from "./Hard";
import Nav from "./Nav";

function RouterComponent () {

    return (

        <Router>
            <Routes>
                <Route
                    element={<Medium />}
                    path="/medium"
                />

                <Route
                    element={<Hard />}
                    path="/hard"
                />

                <Route
                    element={<Easy />}
                    path="/easy"
                />

                <Route
                    element={<div>
                        <WelcomePage />

                        {" "}

                        <Nav />
                             </div>}
                    path="/"
                />
            </Routes>
        </Router>
    );

}

export default RouterComponent;
