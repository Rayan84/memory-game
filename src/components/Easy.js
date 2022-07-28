import React, { useEffect, useState } from "react";
import Finished from "./Finished";

let pending = false;
let first = null;
let unSolvedSquares = 12;
const Easy = () => {
  const [squares, setSquares] = useState([{visible: 'false', id: 100, solved: false}]);
  const [disableClick, setDisableClick] = useState('false');
  const [finished, setFinished] = useState({status: false});
  let tempSquares = [];
  const images = ['a', 'a1', 'b', 'b1', 'c', 'c1', 'd', 'd1', 'e', 'e1', 'f', 'f1'];


  const flip = (number) => {
    console.log(`${number} clicked...`);
    console.log(`pending is: ${pending}`);
    console.log(`first is: ${first}`);
    const changedSquareIndex = squares.findIndex((element) => element.id === number);
      squares[changedSquareIndex].visible = 'true';
      console.log(`index is: ${changedSquareIndex}`);
    
    if (pending == true) {
      if (first === `${number}1` || `${first}1` === number){
        console.log('============= Match ===============')
        unSolvedSquares = unSolvedSquares - 2;
        console.log(`unsolved squares: ${unSolvedSquares}`);
        setTimeout(() => {
          if(unSolvedSquares == 0){
            finished.status = true;
            setFinished(finished => finished);
            console.log(`Finished: ${finished.status}`);
          }
            squares[squares.findIndex((element) => element.id === first)].solved = 'true';
            squares[squares.findIndex((element) => element.id === number)].solved = 'true';
            setDisableClick(disableClick => 'false');
            setSquares(squares => [...squares]);
            console.log(squares);        
        }, 1500)
      }else {
        
        setTimeout(() => {
          console.log('Timeout running...');
          squares[squares.findIndex((element) => element.id === first)].visible = 'false';
          squares[squares.findIndex((element) => element.id === number)].visible = 'false';
          setDisableClick(disableClick => 'false')
          console.log(`disableClick set to: ${disableClick}`);
          setSquares(squares => [...squares]);
          console.log(squares);
        }, 1500);
      }
      setDisableClick(disableClick => 'true');
      console.log(`disableClick set to: ${disableClick}`);
    }

    if (pending === false){
      console.log('pending is false');
      first = number;
      console.log('==');
      console.log(`first set to: ${first}`);
      pending = true;
      console.log(`pending set to ${pending}`);
    }else {
      pending = false;
    }
    
    setSquares(squares => [...squares]);
    console.log(squares);
  };
  
   useEffect(() => {
    for (let i = 0; i < 12; i++){
      let random = Math.floor(Math.random() * images.length);
      
      if(images[random] !== undefined){
        tempSquares.push({id: images[random], visible: 'false', solved: 'false'});
      }
      images.splice(random, 1);
    }
   setSquares(squares => tempSquares);
  }, []);

  return(
    <div>
   
      <div className="grid">
        {finished.status == true ? <Finished />

        :squares.map((square) => (
          <div key={square.id}>
            {console.log('==================Rendering=======================')}

            {
              square.solved === 'true' ? <div className={'square solved ' + `square-${square.id}-background`} style={{
              backgroundPosition: 'center',
              backgroundSize: 'contain'}}>
              </div>
             : square.visible === 'true' && disableClick === 'false' ?
             <div className={'square ' + `square-${square.id}-background`} style={{
              backgroundPosition: 'center',
              backgroundSize: 'contain'}}>
              </div>
              : square.visible === 'true' && disableClick === 'true' ?
              <div className={'square ' + `square-${square.id}-background`} style={{
               backgroundPosition: 'center',
               backgroundSize: 'contain'}}>
               </div>
               : square.visible === 'false' && disableClick === 'true' ?
               <div className={'square square-covered '}>
                </div>
              : <div className="square cursor-pointer square-covered" onClick={() => {flip(square.id)}}></div>
            }
          </div>
         ))}
      </div>
    </div>
  )
}

export default Easy;