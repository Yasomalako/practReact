import "./games.css";
import { useState, useEffect } from "react";
function GameLevel() {
  let today = new Date()
  let time = today.getHours();
  const [level, setLevel] = useState(0)
  const [gameTime, setGameTime] = useState({ time })
  useEffect(() => { alert("Booomba") }, [])
  useEffect(() => { alert("level up") }, [level])
  useEffect(() => { alert(time) }, [gameTime])
  const handelClick = () => {
    setLevel(level + 1)
  }
  const handelTime = () => {
    setGameTime(gameTime)
  }
  return (
    <div>
      <p>Your level is  {level}</p>
      <button onClick={handelClick}>Click to level up</button>
      <button onClick={handelTime}>Show Corect time</button>
    </div>
  );
};

export default GameLevel;
