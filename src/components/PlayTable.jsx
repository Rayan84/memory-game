import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

let clicksCounter = 0,
    first = null,
    pending = false,
    unSolvedSquares;
function PlayTable (props) {

    const [squares, setSquares] = useState([

            {
                "id": 100,
                "solved": false,
                "visible": "false"
            }
        ]);
    const [disableClick, setDisableClick] = useState({"status": false});
    const [finished, setFinished] = useState({"status": false});
    const tempSquares = [];


        const flip = (number) => {

            clicksCounter += 1;
            const changedSquareIndex = squares.findIndex((element) => element.id === number);
            squares[changedSquareIndex].visible = "true";
            if (pending === true) {

                if (first === `${number}1` || `${first}1` === number) {

                    unSolvedSquares -= 2;
                    const squareFlipTimeOut = 1500;
                    setTimeout(
                        () => {

                            const noneLeft = 0;
                            if (unSolvedSquares === noneLeft) {

                                finished.status = true;
                                setFinished((finished) => finished);
                                document.querySelector('.score-window').style.display = 'block';
                            }
                            squares[squares.findIndex((element) => element.id === first)].solved = "true";
                            squares[squares.findIndex((element) => element.id === number)].solved = "true";
                            setDisableClick({status: false});
                            setSquares((squares) => [...squares]);

                        },
                        squareFlipTimeOut
                    );

                } else {

                    setTimeout(
                        () => {

                            squares[squares.findIndex((el) => el.id === first)].visible = "false";
                            squares[squares.findIndex((el) => el.id === number)].visible = "false";
                            setDisableClick({"status": false});
                            setSquares((squares) => [...squares]);

                        },
                        1500
                    );

                }
                setDisableClick({"status": true});

            }

            if (pending === false) {

                first = number;
                pending = true;

            } else {

                pending = false;

            }

            setSquares((squares) => [...squares]);

        };
        const generateTable = () => {
            document.querySelector('.score-window').style.display = 'none';
            clicksCounter = 0;
            unSolvedSquares = props.len;
            finished.status = false;
            setFinished((finished) => finished);
            let arr = [];
            if(props.len == 12){
                arr = ["a", "a1", "b", "b1", "c", "c1", "d", "d1", "e", "e1", "f", "f1"];
            }else if (props.len == 30){
                arr = ["a", "a1", "b", "b1", "c", "c1", "d", "d1", "e", "e1", "f",  "f1", "g", "g1", "h", "h1", "j", "j1", "k", "k1",
                    "l", "l1", "m", "m1", "n", "n1", "o", "o1", "p", "p1"]
            }else {
                arr = ["a", "a1", "b", "b1", "c", "c1", "d", "d1", "e", "e1", "f",  "f1", "g", "g1", "h", "h1", "j", "j1", "k", "k1"]
            }
            
            for (let i = 0; i < props.len; i++) {

                const random = Math.floor(Math.random() * arr.length);

                if (arr[random] !== undefined) {

                    tempSquares.push({"id": arr[random],
                        "solved": "false",
                        "visible": "false"});

                }
                
                arr.splice(
                    random,
                    1
                );

            }
            setSquares(() => tempSquares);

        };

    useEffect(
        () => {            
            generateTable();

        }, []
    );

    return (
        <div>
            <ul className="display-flex justify-content-space-between">
                <li className="list-style-none">
                    <Link
                        className="color-white text-decoration-none" to="/">←
                    </Link>
                </li>
                <li className="list-style-none">
                    Clicks:{" "}{clicksCounter}
                </li>
            </ul>

            <div className="position-absolute text-align-center margin-auto score-window">
                <h1>You win!</h1>
                <h2>Score: {100 - clicksCounter}</h2>
                <div>
                  <button className="cursor-pointer play-again-button" onClick={() => { generateTable() }} type="button">Play Again</button>
                </div>
                <div>
                  <Link className="text-decoration-none" to="/"><button className="cursor-pointer play-again-button">Main menu</button></Link>
                </div>
            </div>

            <div className={props.len == 30 ? "grid-hard" : props.len == 12 ? "grid" : "grid-medium"}>
                {squares.map((square) => (<div key={square.id}>

                        {
                            square.solved === "true"
                                ? <div
                                    className={"square-no-hover solved " + `square-${square.id}-background`}
                                    style={{"backgroundPosition": "center",
                                        "backgroundSize": "contain"}}
                                />
                                : square.visible === "true" && disableClick.status === false
                                    ? <div
                                            className={"square-no-hover " + `square-${square.id}-background`}
                                        style={{"backgroundPosition": "center",
                                            backgroundSize: "contain"}}
                                    />
                                    : square.visible === "true" && disableClick.status === true
                                        ? <div
                                            className={"square-no-hover " + `square-${square.id}-background`}
                                                style={{"backgroundPosition": "center",
                                                backgroundSize: "contain"}}
                                        />
                                        : square.visible === "false" && disableClick.status === true
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

PlayTable.propTypes = {
    len: PropTypes.number
};

export default PlayTable;
