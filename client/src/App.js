import React, { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0)
  console.log(Math.floor(Math.random() * 100000))

  function randomNumber() {
    let randomNum = Math.floor(Math.random() * 100000)
    setNum(randomNum)
  }
  return (
    <div className="App">
      <h1> HOOKZ </h1>
      <h2>RANDOM NUMBER: {num}</h2>
      <button onClick={() => randomNumber()}>Number Generator</button>
    </div>
  );
}

export default App;
