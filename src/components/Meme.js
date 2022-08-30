import "../styles/Meme.css";
import memesData from "../memesData";
import React from "react";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText : '',
    bottomText : '',
    randomImage : 'http://i.imgflip.com/1bij.jpg'
  })

  const [allMemeImages] = React.useState(memesData)

  function buttonClicked() {
    const memesArray = allMemeImages.data.memes;
    const randIndex = Math.floor(Math.random() * memesArray.length); // Number between 0 and 100
    const memeToDisplay = memesArray[randIndex];
    setMeme(prevState => {
      return {
        ...prevState,
        randomImage : memeToDisplay.url
      }
    })
  }

  return (
    <div className="meme--form">
      <div className="form--cont">
        <input type="text" placeholder="TOP TEXT" />
        <input type="text" placeholder="BOTTOM TEXT" />
      </div>
      <button onClick={buttonClicked}>Get a new meme image</button>
      <img src={meme.randomImage} className='meme--image' alt=''></img>
    </div>
  );
};

export default Meme;
