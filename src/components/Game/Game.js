import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { GameStatus, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameBanner from "../GameBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState(GameStatus.unknown);
  const addGuess = (newGuess) => {
    const newGuessList = [...guesses, newGuess];
    setGuesses(newGuessList);
    if (newGuess === answer) {
      setGameStatus(GameStatus.won);
    } else if (newGuessList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(GameStatus.lost);
    }
  };

  return (
    <>
      <GuessInput
        addGuess={addGuess}
        isDisabled={gameStatus !== GameStatus.unknown}
      />
      <GameBanner
        gameStatus={gameStatus}
        answer={answer}
        numOfGuesses={guesses.length}
      />
      {gameStatus === GameStatus.unknown && (
        <GuessResults guessList={guesses} answer={answer} />
      )}
    </>
  );
}

export default Game;
