// import "./Desck.css";
import React, { useEffect, useState } from "react";

function Desck({number=0}) {
  const [legs, setLegs] = useState(number);
  useEffect(() => { alert("Hello") }, [])
  useEffect(() => {alert("you update the numbers of legs")},[legs])
  
  return (
    <div className="desck">
      <h1>desck</h1>
      <h1>{legs}</h1>
      <button onClick={() =>{ setLegs(legs + 1)}}>Add aleg</button>
      <button onClick={() =>{ setLegs(legs - 1)}}>cancel leg adding</button>
    </div>
  );
};

export default Desck
