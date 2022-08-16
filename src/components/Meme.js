import "../styles/Meme.css";
import memesData from "../memesData";

const Meme = () => {
  function buttonClicked() {
    const randIndex = Math.floor(Math.random() * 100); // Number between 0 and 100
    const memeToDisplay = memesData.data.memes[randIndex];
    console.log(memeToDisplay.url);
  }
  /**
   * Challenge: Get a random image from the `memesData` array
   * when the "new meme image" button is clicked.
   *
   * Log the URL of the image to the console. (Don't worry
   * about displaying the image yet)
   */

  return (
    <div className="meme--form">
      <div className="form--cont">
        <input type="text" placeholder="TOP TEXT" />
        <input type="text" placeholder="BOTTOM TEXT" />
      </div>
      <button onClick={buttonClicked}>Get a new meme image</button>
    </div>
  );
};

export default Meme;
