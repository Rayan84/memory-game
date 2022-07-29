import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import logo from '../logo.svg';

const WelcomePage = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timeOut = 0;
    const interval = setInterval(() => {
      if(timeOut < 100){
        setCounter(counter => counter + 1)
        timeOut = timeOut + 1;
      }else {
        clearInterval(interval);
      }
    } ,35);
    return () => clearInterval(interval);
  }, []);

  return(
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    {
      counter < 100 ? <div> <h1>Game</h1>   
      <h3>{`${counter} %`}</h3> </div> : null
 } 
    </div>
  );
}

export default WelcomePage;