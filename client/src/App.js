import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0)
  const [xCoord, setXCoord] = useState(0)
  const [yCoord, setYCoord] = useState(0)

  function randomNumber() {
    let randomNum = Math.floor(Math.random() * 1000000)
    setNum(randomNum)
  }
  
  const trackMouseMovement = (e) => {
    let coordX = e.clientX
    let coordY = e.clientY
    document.querySelector("#xcoord").innerHTML = coordX
    document.querySelector("#ycoord").innerHTML = coordY
  }

  useEffect(() => 
  document.querySelector(".App").addEventListener("mousemove", 
  function(e) {
      trackMouseMovement(e)
  }))

  
  return (
    <div className="App">
      <h1> HOOKZ </h1>
      <h2>RANDOM NUMBER: {num}</h2>
      <button onClick={() => randomNumber()}>Number Generator</button>
      <h1>Mouse movement - X:<span id="xcoord"></span>  Y:<span id="ycoord"></span></h1>

    </div>
  );
}

export default App;
