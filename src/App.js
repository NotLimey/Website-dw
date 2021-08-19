import './App.css';
import React, { useState } from 'react';
import hug from './img/hug.mp4';

function App() {

  const [goodDay, setgoodDay] = useState("");
  const [img, setImg] = useState(false);

  function goodDayy() {
    setImg(false);
    setgoodDay("That's Awesome!!!")
  }

  function badDay() {
    setgoodDay("Oh no, here have a hug")
    setImg(true);
  }

  return (
    <div>
      <h2>Are you having a good day?</h2>
      <button className="yes" onClick={goodDayy}>Yes</button>
      <button className="no" onClick={badDay}>No</button>
      <h3>{goodDay}</h3>
      {img ? 
        <div>
          <video src={hug} alt="hug Video"/>
        </div> 
        : <> </>}
    </div>
  );
}

export default App;
