import React, { useEffect, useState } from "react";


const Easy = () => {
  const [squares, setSquares] = useState([{visible: 'false', id: 100, solved: false}]);
  let tempSquares = [];
  const images = ['a', 'a1', 'b', 'b1', 'c', 'c1', 'd', 'd1', 'e', 'e1', 'f', 'f1'];
  const flip = (number) => {
    console.log(`${number} clicked...`);
    const changedSquareIndex = squares.findIndex((element) => element.id === number);
    squares[changedSquareIndex].visible = 'true';
    console.log('==');
    console.log(`index is: ${changedSquareIndex}`);
    
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

   console.log(`tempsquares = ${tempSquares}`)
   setSquares(squares => tempSquares);
  }, []);
  console.log(squares);

  return(
    <div>
      <p>Easy</p>
      <div className="grid">
        { squares.map((square) => (
          <div key={square.id}>
            {console.log('==================Rendering=======================')}
            {square.visible === 'true'?
             <div className={'square cursor-pointer ' + `square-${square.id}-background`} style={{
              backgroundPosition: 'center',
              backgroundSize: 'contain'}} onClick={() => {flip(square.id)
              }}>
              </div> :
             <div className="square cursor-pointer square-covered" onClick={() => {flip(square.id)}}></div>
            }
            {console.log(square)}
            {console.log(square.id)}
          </div>
         ))}
      </div>
    </div>
  )
}

export default Easy;