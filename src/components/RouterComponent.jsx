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
                    element={<Easy len={36} chars={[


                        "a",
                        "a1",
                        "b",
                        "b1",
                        "c",
                        "c1",
                        "d",
                        "d1",
                        "e",
                        "e1",
                        "f",
                        "f1",
                        "g",
                        "g1",
                        "h",
                        "h1",
                        "i",
                        "i1",
                        "j",
                        "j1",
                        "k",
                        "k1",
                        "l",
                        "l1",
                        "m",
                        "m1",
                        "n",
                        "n1",
                        "o",
                        "o1",
                        "p",
                        "p1",
                        "q",
                        "q1",
                        "r",
                        "r1"
                    ]}/>}
                    path="/hard"
                />

                <Route
                    element={<Easy len={12} chars={[
                        "a",
                        "a1",
                        "b",
                        "b1",
                        "c",
                        "c1",
                        "d",
                        "d1",
                        "e",
                        "e1",
                        "f",
                        "f1"
                    ]}/>}
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
