
import React, {useEffect, useState} from "react";

let initialLoadingProgress = true;
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
                        document.querySelector('.loading-container').style.visibility = 'hidden';
                        initialLoadingProgress = false;
                        
                    }

                },
                35
            );

        },
        []
    );

    return (
        <div>
            <h1>Memory Game</h1>
            <div className="loading-container">
                {initialLoadingProgress ? <h3>{`Loading ${counter} %`} </h3> : null }
            </div>
        </div>
    );

}

export default WelcomePage;
