import React from "react";
import { GameStatus } from "../../constants";

function GameBanner({ gameStatus, numOfGuesses, answer }) {
  if (gameStatus === GameStatus.unknown) return null;
  return (
    <>
      {gameStatus === GameStatus.won && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{numOfGuesses} guesses</strong>.
          </p>
        </div>
      )}
      {gameStatus === GameStatus.lost && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GameBanner;
