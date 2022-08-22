// import "./Desck.css";
import React, { useEffect, useState } from "react";
function Desck({ number, desckColor,time }) {
  const GameTime = new Date().getHours()
  const [legs, setLegs] = useState(number);
  const [color, setLegscolor] = useState(desckColor);
  const [corentTime, setTime] = useState(time);
  useEffect(() => { alert("the game time is update") }, [corentTime])
  // useEffect(() => { alert("Hello") }, [])
  // useEffect(() => {alert("you update the numbers of legs")},[legs])
  useEffect(() => { setLegscolor(color) }, [color])

  return (
    <div className="desck">
      <h1>desck</h1>
      <h1>Game Time:{corentTime}</h1>
      <h1>Desck Color:{color}</h1>
      <h1>legs Amount:{legs}</h1>
      <button onClick={() => { setLegs(legs + 1) }}>Add aleg</button>
      <button onClick={() => { setLegs(legs - 1) }}>cancel leg adding</button>
      <button onClick={() => { setLegs(legs === 0) }}>Reset cart</button>
      <button onClick={() => { setLegscolor(color==="blue") }}>Blue desck</button>
      <button onClick={() => { setTime(GameTime) }}>update game time</button>
      <input  onChange={(e)=>{setLegscolor(e.target.value)}} type="text"/>
      {/* <button  onClick={(e)=>{setLegscolor(e.target.value)}}>click to add color</button> */}
    </div>
  );
};

export default Desck
