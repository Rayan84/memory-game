import { useEffect } from "react";
import { useState } from "react";
import Nav from "./Nav";

const WelcomePage = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if(counter < 100){
      //console.log('starting...')
    }
    let timeOut = 0;
    const interval = setInterval(() => {
    
      //console.log('Interval running...');
      if(timeOut < 100){
        setCounter(counter => counter + 1)
        timeOut = timeOut + 1;
        // console.log(timeOut);

      }else {
        clearInterval(interval);
      }
      
    } ,35);
    return () => clearInterval(interval);
  }, []);

  return(
    <div>
    {
      counter < 100 ? <h1>{`${counter} %`}</h1> : <div>

      
      <h1>Memory Game</h1>
      <p>Choose a level</p>
      <Nav />

    </div>
    }
      
    </div>

  );
}

export default WelcomePage;