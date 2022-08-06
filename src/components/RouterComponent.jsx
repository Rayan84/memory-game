import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import React from "react";
import WelcomePage from "./WelcomePage";
import PlayTable from "./PlayTable";
import Nav from "./Nav";

function RouterComponent () {

    return (
        <Router>
            <Routes>
                <Route
                    element={<PlayTable len={20} />}
                    path="/medium"
                />

                <Route
                    element={<PlayTable len={30} />}
                    path="/hard"
                />

                <Route
                    element={<PlayTable len={12} />}
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
