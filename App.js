import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [catFact, setCatFact] = useState(null);
  const [humanGender, setHumanGender] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((response) => {
        setCatFact(response.data.catFact);
        setHumanGender(response.data.humanGender);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
        <div>Cat Fact: {catFact}</div>
        </p>
        <p>
        <div>Human Gender: {humanGender}</div>
        </p>
      </header>
    </div>
  
  );
}

export default App;