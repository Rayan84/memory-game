import React, { useEffect, useState } from "react";

let pending = false;
let first = null;
const Easy = () => {
  const [squares, setSquares] = useState([{visible: 'false', id: 100, solved: false}]);
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
      console.log('pending is true');
      console.log(`first is ${first}`);
      console.log(`second is ${number}`);
      
      if (first === `${number}1` || `${first}1` === number){
        console.log('============= Match ===============')
        setTimeout(() => {
        squares[squares.findIndex((element) => element.id === first)].solved = 'true';
        squares[squares.findIndex((element) => element.id === number)].solved = 'true';
        setSquares(squares => [...squares]);
        console.log(squares);
        }, 1500)
      }else {
        setTimeout(() => {
          console.log('Timeout running...');
          squares[squares.findIndex((element) => element.id === first)].visible = 'false';
          squares[squares.findIndex((element) => element.id === number)].visible = 'false';
          setSquares(squares => [...squares]);
          console.log(squares);
        }, 2000);
      }
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
      console.log(`random number is: ${random}`);
      
      if(images[random] !== undefined){
        tempSquares.push({id: images[random], visible: 'false', solved: 'false'});
        console.log(`squares: ${tempSquares}`);
      }
      images.splice(random, 1);
      console.log(`Images left: ${images}`);
      console.log(`i =  ${i}`);      
    }

   setSquares(squares => tempSquares);
  }, []);

  return(
    <div>
      <p>Easy</p>
      <div className="grid">
        { squares.map((square) => (
          <div key={square.id}>
            {console.log('==================Rendering=======================')}

            {square.solved === 'true' ? <div className={'square solved' + `square-${square.id}-background`} style={{
                backgroundPosition: 'center',
                backgroundSize: 'contain'}}></div>
             : square.visible === 'true' && square.solved === 'false'?
             <div className={'square cursor-pointer ' + `square-${square.id}-background`} style={{
              backgroundPosition: 'center',
              backgroundSize: 'contain'}} onClick={() => {flip(square.id)
              }}>
              </div> :
             <div className="square cursor-pointer square-covered" onClick={() => {flip(square.id)}}></div>
            }
          </div>
         ))}
      </div>
    </div>
  )
}

export default Easy;