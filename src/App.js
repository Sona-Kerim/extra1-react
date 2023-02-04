import React, { useState } from "react";
import "./App.css";
const characters = [
  "Sona",
  "Eli",
  "Veli",
  "Ehmed",
  "Gulnar"
];

function App() {
  const [index, setIndex] = useState(0);

  const func= () => {
    if (index === characters.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <button onClick={func}>Next</button>
      <p>{characters[index]}</p>
    </div>
  );
}

export default App;
