import React, {useEffect, useState} from "react";
import Finished from "./Finished";
import {Link} from "react-router-dom";

let clicksCounter = 0,
    first = null,
    pending = false,
    unSolvedSquares;
function Easy () {

    const [
            squares,
            setSquares
        ] = useState([

            {
                "id": 100,
                "solved": false,
                "visible": "false"
            }
        ]),
        [
            disableClick,
            setDisableClick
        ] = useState("false"),
        [
            finished,
            setFinished
        ] = useState({"status": false}),
        tempSquares = [],
        images = [
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
        ],

        flip = (number) => {

            clicksCounter += 1;
            console.log(`clicks counter: ${clicksCounter}`);
            console.log(`${number} clicked...`);
            console.log(`pending is: ${pending}`);
            console.log(`first is: ${first}`);
            const changedSquareIndex = squares.findIndex((element) => element.id === number);
            squares[changedSquareIndex].visible = "true";
            console.log(`index is: ${changedSquareIndex}`);
            if (pending === true) {

                if (first === `${number}1` || `${first}1` === number) {

                    console.log("============= Match ===============");
                    unSolvedSquares -= 2;
                    console.log(`unsolved squares: ${unSolvedSquares}`);
                    const squareFlipTimeOut = 1500;
                    setTimeout(
                        () => {

                            const noneLeft = 0;
                            if (unSolvedSquares === noneLeft) {

                                finished.status = true;
                                setFinished((finished) => finished);
                                console.log(`Finished: ${finished.status}`);

                            }
                            squares[squares.findIndex((element) => element.id === first)].solved = "true";
                            squares[squares.findIndex((element) => element.id === number)].solved = "true";
                            setDisableClick((disableClick) => "false");
                            setSquares((squares) => [...squares]);
                            console.log(squares);

                        },
                        squareFlipTimeOut
                    );

                } else {

                    setTimeout(
                        () => {

                            console.log("Timeout running...");
                            squares[squares.findIndex((el) => el.id === first)].visible = "false";
                            squares[squares.findIndex((el) => el.id === number)].visible = "false";
                            setDisableClick((disableClick) => "false");
                            console.log(`disableClick set to: ${disableClick}`);
                            setSquares((squares) => [...squares]);

                        },
                        1500
                    );

                }
                setDisableClick((disableClick) => "true");
                console.log(`disableClick set to: ${disableClick}`);

            }

            if (pending === false) {

                console.log("pending is false");
                first = number;
                console.log("==");
                console.log(`first set to: ${first}`);
                pending = true;
                console.log(`pending set to ${pending}`);

            } else {

                pending = false;

            }

            setSquares((squares) => [...squares]);
            console.log(squares);

        },

        generateTable = () => {

            clicksCounter = 0;
            unSolvedSquares = 12;
            finished.status = false;
            setFinished((finished) => finished);
            const totalSquares = 12;
            for (let i = 0; i < totalSquares; i++) {

                console.log("generating table...");
                const random = Math.floor(Math.random() * images.length);

                if (images[random] !== undefined) {

                    tempSquares.push({"id": images[random],
                        "solved": "false",
                        "visible": "false"});

                }
                images.splice(
                    random,
                    1
                );

            }
            setSquares((squares) => tempSquares);

        };

    useEffect(
        () => {

            generateTable();

        },
        []
    );

    return (
        <div>
            <Link
                className="color-white text-decoration-none"
                to="/"
            >
                ← Back
            </Link>

            <p>
                Clicks:
                {" "}

                {clicksCounter}
            </p>

            <div className="grid">
                {finished.status === true
                    ? <div>
                        <Finished />

                        <button
                            onClick={() => {

                                generateTable();

                            }}
                            type="button"
                        >
                            Play Again
                        </button>
                    </div>

                    : squares.map((square) => (<div key={square.id}>
                        {console.log("==================Rendering=======================")}

                        {
                            square.solved === "true"
                                ? <div
                                    className={"square-no-hover solved " + `square-${square.id}-background`}
                                    style={{"backgroundPosition": "center",
                                        "backgroundSize": "contain"}}
                                />
                                : square.visible === "true" && disableClick === "false"
                                    ? <div
                                            className={"square " + `square-${square.id}-background`}
                                        style={{"backgroundPosition": "center",
                                            backgroundSize: "contain"}}
                                    />
                                    : square.visible === "true" && disableClick === "true"
                                        ? <div
                                            className={"square " + `square-${square.id}-background`}
                                                style={{"backgroundPosition": "center", backgroundSize: "contain"}}
                                        />
                                        : square.visible === "false" && disableClick === "true"
                                            ? <div className="square square-covered " />
                                            : <div
                                                    className="square cursor-pointer square-covered"
                                                    onClick={() => {

                                                    flip(square.id);

                                                }}
                                            />

                        }
                    </div>))}
            </div>
        </div>
    );

}

export default Easy;
