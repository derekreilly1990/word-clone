import React, { useState } from "react";

function GuessInput({ addGuess }) {
  const [currentWord, setCurrentWord] = useState("");

  const onChange = (event) => {
    setCurrentWord(event.target.value.toUpperCase());
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Guess", currentWord);
    addGuess(currentWord);
    setCurrentWord("");
  };
  return (
    <form
      autoComplete={"off"}
      onSubmit={onSubmit}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={currentWord}
        id="guess-input"
        onChange={onChange}
        type="text"
        pattern="[A-Z]{5}"
        title={"Please enter 5 letters"}
      />
    </form>
  );
}

export default GuessInput;
