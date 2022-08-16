import "../styles/Meme.css";
import memesData from "../memesData";

const Meme = () => {
  function buttonClicked() {
    const memesArray = memesData.data.memes;
    const randIndex = Math.floor(Math.random() * memesArray.length); // Number between 0 and 100
    const memeToDisplay = memesArray[randIndex];
    console.log(memeToDisplay.url);
  }

  return (
    <div className="meme--form">
      <div className="form--cont">
        <input type="text" placeholder="TOP TEXT" />
        <input type="text" placeholder="BOTTOM TEXT" />
      </div>
      <button onClick={buttonClicked}>Get a new meme image</button>
      <img></img>
    </div>
  );
};

export default Meme;
