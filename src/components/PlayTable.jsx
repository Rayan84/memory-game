import React, {useEffect, useState} from "react";
import Finished from "./Finished";
import {Link} from "react-router-dom";

let clicksCounter = 0,
    first = null,
    pending = false,
    unSolvedSquares;
function PlayTable (props) {

    console.log('Easy starting...');
    const [squares, setSquares] = useState([

            {
                "id": 100,
                "solved": false,
                "visible": "false"
            }
        ]);
    const [disableClick, setDisableClick] = useState("false");
    const [finished, setFinished] = useState({"status": false});
    const tempSquares = [];


        const flip = (number) => {

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

        };
        const generateTable = () => {
            console.log('generating table');
            // console.log(`props chars: ${props.chars}`);
            // console.log(`chars: ${chars}`);
            clicksCounter = 0;
            unSolvedSquares = props.len;
            finished.status = false;
            setFinished((finished) => finished);
            let arr = [];
            if(props.len == 12){
                console.log(`props len : ${props.len}`);
                arr = ["a", "a1", "b", "b1", "c", "c1", "d", "d1", "e", "e1", "f", "f1"];
            }else if (props.len == 36){
                arr = ["a", "a1", "b", "b1", "c", "c1", "d", "d1", "e", "e1", "f",  "f1", "g", "g1", "h", "h1", "i", "i1", "j", "j1", "k", "k1",
                    "l", "l1", "m", "m1", "n", "n1", "o", "o1", "p", "p1", "q", "q1", "r", "r1"]
            }else {
                arr = ["a", "a1", "b", "b1", "c", "c1", "d", "d1", "e", "e1", "f",  "f1", "g", "g1", "h", "h1", "i", "i1", "j", "j1"]
            }
            
            for (let i = 0; i < props.len; i++) {

                console.log(arr.length);
                const random = Math.floor(Math.random() * arr.length);

                if (arr[random] !== undefined) {

                    tempSquares.push({"id": arr[random],
                        "solved": "false",
                        "visible": "false"});
                        console.log(`id: ${arr[random]}`)

                }
                
                arr.splice(
                    random,
                    1
                );

            }
            setSquares((squares) => tempSquares);

        };

    useEffect(
        () => {            
            generateTable();

        }, []
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

            <div className={props.len == 36 ? "grid-hard" : props.len == 12 ? "grid" : "grid-medium"}>
                {finished.status === true
                    ? <div>
                        <Finished value={'Well done!'}/>

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

export default PlayTable;
