
import React, {useEffect, useState} from "react";
import logo from "../logo.jpg";

function WelcomePage () {

    const [
        counter,
        setCounter
    ] = useState(0);

    useEffect(
        () => {

            let timeOut = 0;
            const interval = setInterval(
                () => {

                    if (timeOut < 100) {

                        setCounter((counter) => counter + 1);
                        timeOut += 1;

                    } else {

                        clearInterval(interval);

                    }

                },
                35
            );

        },
        []
    );

    return (
        <div>
            <img
                alt="logo"
                className="App-logo"
                src={logo}
            />

            {
                counter < 100
                    ? <div>
                        {" "}

                        <h1>
                            Memory Game
                        </h1>

                        <h3>
                            {`Loading ${counter} %`}
                        </h3>
                      </div>
                    : null
            }
        </div>
    );

}

export default WelcomePage;
