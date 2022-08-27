import "./nav-bar.css";
import React from "react";
import  {Link}  from "react-router-dom";
export const pages = ["about", "desck", "user", "game"]

export function Navbar() {
  return (
    <div className="nav-bar">
        <Link to="/"><button>home</button></Link><br></br>
        <Link to="pageDonttfind"></Link><br></br>
        {
          pages.map(pagePath => (
            <Link to={pagePath}><button>{pagePath}</button></Link>
          ))}
      </div>

  );
};

