import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <button onClick={props.toggleTheme}>Change Theme</button>
          <Link to="/persons/"><h3>Characters</h3></Link>
          <Link to="/films/"><h3>Films</h3></Link>
    </div>
  );
}