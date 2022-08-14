import "../styles/Meme.css";

const Meme = () => {
  return (
    <form className="meme--form">
      <div className="form--cont">
        <input type="text" placeholder="TOP TEXT" />
        <input type="text" placeholder="BOTTOM TEXT" />
      </div>
      <button>Get a new meme image</button>
    </form>
  );
};

export default Meme;
