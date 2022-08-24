import "./header.css";
import React from "react";

export default function Header() {
  return (
    <nav className="header">
      <a href="/" className="site-title">
        site-name
      </a>
      <ul>
        <li>
          <a href="home">Home</a>
          </li>
          <li>
          <a href="user">User</a>
          </li>
          <li>
          <a href="about">About-us</a>
          </li>
          <li>
          <a href="game">Game</a>
          </li>
          <li>
          <a href="desck">Desck</a>
          </li>
          <li>
          <a href="contactus">Contact-us</a>
        </li>
      </ul>
    </nav>
)
  }