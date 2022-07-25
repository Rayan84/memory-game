import React, { useEffect, useState } from "react";


const Easy = () => {
  const [squares, setSquares] = useState([]);
  let tempSquares = [];
  const images = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  useEffect(() => {
    for (let i = 0; i < 12; i++){
      let random = Math.floor(Math.random() * images.length);
      console.log(`random number is: ${random}`);
      
      if(images[random] !== undefined){
        tempSquares.push(images[random]);
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
          <div key={square}>
            <div className="square cursor-pointer">{}</div>
          </div>
         ))}
      </div>
    </div>
  )
}

export default Easy;