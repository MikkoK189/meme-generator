import "../styles/Meme.css";
import memesData from "../memesData";
import { React, useEffect, useState} from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText : '',
    bottomText : '',
    randomImage : 'http://i.imgflip.com/1bij.jpg'
  })

  const [allMemeImages, setAllMemeImages] = useState({memesData})

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(data => setAllMemeImages(data)) 
  }, [])

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

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
        <input type="text" placeholder="TOP TEXT" name="topText" value={meme.topText} onChange={handleChange} />
        <input type="text" placeholder="BOTTOM TEXT" name="bottomText" value={meme.bottomText} onChange={handleChange} />
      </div>
      <button onClick={buttonClicked}>Get a new meme image</button>
      <div className="meme">
        <img src={meme.randomImage} className='meme--image' alt=''></img>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default Meme;
