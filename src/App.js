import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then(res => {
        const charactersArray = res.data.results;
        setCharacters(charactersArray);
      })
      .catch(err => {
        console.log(err, "NOPE, PLEASE FIX THIS");
      });
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Using React</h1>
      <div>
        <Character people={characters} />
      </div>
    </div>
  );
};

export default App;
