import React from "react"

export default function Header() {
  return (
    <header className="header">
      <img src="images/troll-face.png" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <a href="https://github.com/adityax4/meme-generator" target="_blank">
        <i className="fa-brands fa-github"></i>
      </a>
    </header>
  );
}
