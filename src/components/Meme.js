import "../styles/Meme.css";
import memesData from "../memesData";
import React from "react";

const Meme = () => {
  const [imageUrl, setImageUrl] = React.useState('')

  function buttonClicked() {
    const memesArray = memesData.data.memes;
    const randIndex = Math.floor(Math.random() * memesArray.length); // Number between 0 and 100
    const memeToDisplay = memesArray[randIndex];
    setImageUrl(memeToDisplay.url)
  }

  return (
    <div className="meme--form">
      <div className="form--cont">
        <input type="text" placeholder="TOP TEXT" />
        <input type="text" placeholder="BOTTOM TEXT" />
      </div>
      <button onClick={buttonClicked}>Get a new meme image</button>
      <img src={imageUrl} className='meme--image' alt=''></img>
    </div>
  );
};

export default Meme;
