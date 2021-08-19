import './App.css';
import React, { useState } from 'react';
import hug from './img/hug.mp4';
import ThumbsUp from './img/thumbsUp.mp4';

function App() {

  const [goodDay, setgoodDay] = useState();
  const [img, setImg] = useState(false);
  const [currentImg, setcurrentImg] = useState();

  function Reset() {
    setImg(false);
    setcurrentImg();
    setgoodDay();
  }

  function goodDayy() {
    setImg(true);
    setcurrentImg(ThumbsUp);
    setgoodDay("That's Awesome! Keep on!");
  }

  function badDay() {
    setgoodDay("Oh no, here have a hug <3")
    setcurrentImg(hug);
    setImg(true);
  }

  return (
    <>
      <section>
        <h2>Are you having a good day?</h2>
        <button className="yes" onClick={goodDayy}>Yes</button>
        <button className="no" onClick={badDay}>No</button>
        {goodDay === undefined ? 
        <></> :
        <button className="reset" onClick={Reset}>Reset</button>
        }
        <h3>{goodDay}</h3>
        {img ? 
          <div>
            <video src={currentImg} alt="hug Video" type="video/mp4" autoPlay loop />
          </div> 
          : <> </>}
      </section>
      <footer>
        <p>This website was created because i was bored :)</p>
      </footer>
    </>
  );
}

export default App;
